import re

filepath = "site/public/focus.html.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add IDs for Zen Mode targets
# Header stats
content = content.replace(
    '<div class="flex w-full max-w-2xl items-center justify-between border-b border-gray-800 pb-4">',
    '<div id="focus-stats" class="flex w-full max-w-2xl items-center justify-between border-b border-gray-800 pb-4">'
)

# Session Log
content = content.replace(
    '<div class="mt-8 w-full max-w-3xl">',
    '<div id="focus-log" class="mt-8 w-full max-w-3xl">'
)

# Task Input Container (add ID)
content = content.replace(
    '<div class="w-full max-w-lg">',
    '<div id="focus-task-container" class="w-full max-w-lg">'
)

# 2. Fix XSS in completeSession
xss_vulnerable_code = r"""                row.innerHTML = `
                    <td class="px-6 py-4 font-mono">\${initialTime / 60}m</td>
                    <td class="px-6 py-4">\${taskInput.value || 'Deep Work'}</td>
                    <td class="px-6 py-4 text-primary">\+\${earnedXP} XP</td>
                    <td class="px-6 py-4 text-gray-500">\${timeString}</td>
                `;"""

# We need to match it flexibly because of whitespace or potentially slight differences if I typed it wrong in thought
# But let's try strict string replacement first, or a block replacement.
# Since I wrote the previous script, I know what I injected.

# The block to replace:
old_xss_block = """                row.innerHTML = `
                    <td class="px-6 py-4 font-mono">${initialTime / 60}m</td>
                    <td class="px-6 py-4">${taskInput.value || 'Deep Work'}</td>
                    <td class="px-6 py-4 text-primary">+${earnedXP} XP</td>
                    <td class="px-6 py-4 text-gray-500">${timeString}</td>
                `;"""

new_xss_block = """
                const durationCell = document.createElement('td');
                durationCell.className = 'px-6 py-4 font-mono';
                durationCell.textContent = (initialTime / 60) + 'm';

                const taskCell = document.createElement('td');
                taskCell.className = 'px-6 py-4';
                taskCell.textContent = taskInput.value || 'Deep Work';

                const xpCell = document.createElement('td');
                xpCell.className = 'px-6 py-4 text-primary';
                xpCell.textContent = '+' + earnedXP + ' XP';

                const timeCell = document.createElement('td');
                timeCell.className = 'px-6 py-4 text-gray-500';
                timeCell.textContent = timeString;

                row.appendChild(durationCell);
                row.appendChild(taskCell);
                row.appendChild(xpCell);
                row.appendChild(timeCell);"""

if old_xss_block in content:
    content = content.replace(old_xss_block, new_xss_block)
else:
    print("Warning: Could not find XSS vulnerable block for replacement.")

# 3. Update Zen Mode Logic
# We replace the entire event listener block
old_zen_block = """        // Zen Mode
        btnZenMode.addEventListener('click', () => {
            header.classList.toggle('hidden');
            footer.classList.toggle('hidden');
            const isZen = header.classList.contains('hidden');
            btnZenMode.innerHTML = isZen ?
                '<span class="material-symbols-outlined text-sm">visibility</span> Exit Zen Mode' :
                '<span class="material-symbols-outlined text-sm">visibility_off</span> Toggle Zen Mode';
        });"""

new_zen_block = """        // Zen Mode
        btnZenMode.addEventListener('click', () => {
            header.classList.toggle('hidden');
            footer.classList.toggle('hidden');

            const stats = document.getElementById('focus-stats');
            const log = document.getElementById('focus-log');
            const taskContainer = document.getElementById('focus-task-container');

            if (stats) stats.classList.toggle('hidden');
            if (log) log.classList.toggle('hidden');
            if (taskContainer) taskContainer.classList.toggle('hidden');

            const isZen = header.classList.contains('hidden');
            btnZenMode.innerHTML = isZen ?
                '<span class="material-symbols-outlined text-sm">visibility</span> Exit Zen Mode' :
                '<span class="material-symbols-outlined text-sm">visibility_off</span> Toggle Zen Mode';
        });"""

if old_zen_block in content:
    content = content.replace(old_zen_block, new_zen_block)
else:
    print("Warning: Could not find Zen Mode block for replacement.")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Focus issues fixed.")
