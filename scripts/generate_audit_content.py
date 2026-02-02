import re

filepath = 'site/public/audit.html.html'

with open(filepath, 'r') as f:
    content = f.read()

# New Main Content
new_main_content = """
<main class="flex-1 p-2 sm:p-4 space-y-6">
    <!-- Header Status -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
            <h1 class="text-2xl font-bold text-white flex items-center gap-2">
                <span class="material-symbols-outlined text-electric-yellow">shield</span>
                Security Status: <span class="text-red-500 animate-pulse">ELEVATED</span>
            </h1>
            <p class="text-gray-400 text-sm mt-1">Threat Level: <span class="text-white font-mono">DEFCON 3</span> | Active Incidents: <span class="text-white font-mono">4</span></p>
        </div>
        <button id="lockdown-btn" class="flex items-center gap-2 bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md font-mono font-bold uppercase transition-all">
            <span class="material-symbols-outlined">lock</span>
            Lockdown Protocol
        </button>
    </div>

    <!-- Live Threat Map & Feed -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Threat Map (Simulated) -->
        <div class="lg:col-span-2 border border-gray-800 rounded-lg p-4 bg-gray-900/20 relative overflow-hidden h-96">
            <h2 class="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-sm">public</span> Live Threat Map
            </h2>
            <div id="threat-map" class="absolute inset-0 top-10 opacity-50">
                <!-- Grid Background -->
                <div class="absolute inset-0" style="background-image: radial-gradient(#333 1px, transparent 1px); background-size: 20px 20px;"></div>
                <!-- Simulated Pings (JS will inject these) -->
                <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div class="absolute top-1/2 left-2/3 w-3 h-3 bg-red-500 rounded-full animate-ping delay-75"></div>
                <div class="absolute top-3/4 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping delay-150"></div>
            </div>
            <div class="absolute bottom-4 left-4 font-mono text-xs text-primary bg-black/50 px-2 py-1 rounded border border-gray-800">
                ORIGIN: 192.168.4.22<br>TARGET: /api/v1/auth
            </div>
        </div>

        <!-- Vulnerability Feed -->
        <div class="border border-gray-800 rounded-lg p-4 bg-gray-900/20 flex flex-col h-96">
             <h2 class="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-sm">bug_report</span> Vulnerability Feed
            </h2>
            <div class="flex-1 overflow-y-auto space-y-3 font-mono text-xs" id="vuln-feed">
                <div class="flex gap-2 text-gray-400 border-l-2 border-red-500 pl-2">
                    <span class="text-red-400">CVE-2024-3094</span>
                    <span class="text-gray-500">SSH Backdoor</span>
                </div>
                <div class="flex gap-2 text-gray-400 border-l-2 border-yellow-500 pl-2">
                    <span class="text-yellow-400">CVE-2023-44487</span>
                    <span class="text-gray-500">HTTP/2 Reset</span>
                </div>
                <div class="flex gap-2 text-gray-400 border-l-2 border-primary pl-2">
                    <span class="text-primary">PATCHED</span>
                    <span class="text-gray-500">liblzma upgrade</span>
                </div>
                <div class="flex gap-2 text-gray-400 border-l-2 border-gray-700 pl-2 opacity-60">
                    <span class="text-gray-500">Scanning...</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Integrity Checks & Audit Log -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Integrity Checks -->
        <div class="border border-gray-800 rounded-lg p-4 bg-gray-900/20">
             <h2 class="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-sm">fingerprint</span> Integrity Checks
            </h2>
            <table class="w-full text-xs font-mono">
                <thead>
                    <tr class="text-gray-500 text-left">
                        <th class="pb-2">FILE</th>
                        <th class="pb-2">HASH (SHA-256)</th>
                        <th class="pb-2 text-right">STATUS</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-800">
                    <tr>
                        <td class="py-2 text-white">/etc/passwd</td>
                        <td class="py-2 text-gray-500">a3f9...8b21</td>
                        <td class="py-2 text-right text-primary">PASS</td>
                    </tr>
                    <tr>
                        <td class="py-2 text-white">/bin/login</td>
                        <td class="py-2 text-gray-500">c4d2...9e10</td>
                        <td class="py-2 text-right text-primary">PASS</td>
                    </tr>
                    <tr>
                        <td class="py-2 text-white">/var/www/html/index.php</td>
                        <td class="py-2 text-gray-500">e1b4...7f33</td>
                        <td class="py-2 text-right text-primary">PASS</td>
                    </tr>
                     <tr>
                        <td class="py-2 text-white">/usr/local/bin/stitch</td>
                        <td class="py-2 text-gray-500 animate-pulse">Scanning...</td>
                        <td class="py-2 text-right text-yellow-500">CHECK</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Audit Log -->
        <div class="border border-gray-800 rounded-lg p-4 bg-gray-900/20">
             <h2 class="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-sm">history</span> Audit Log
            </h2>
            <div class="overflow-x-auto">
                <table class="w-full text-xs text-left">
                    <thead>
                        <tr class="text-gray-500 border-b border-gray-800">
                            <th class="pb-2 pl-2">USER</th>
                            <th class="pb-2">ACTION</th>
                            <th class="pb-2 text-right pr-2">TIME</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">
                        <tr class="hover:bg-gray-800/50">
                            <td class="py-2 pl-2 flex items-center gap-2">
                                <div class="w-6 h-6 rounded-full bg-gray-700 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqchH84ZcbepgFyeIgllB1XikSkhZnON9w-Z7qqg5E_2I2nM32AsnKfAfcUUTQ7tsH20R_pp7Me34TAXPCf0qkXrUkP-2JEHa7unvmQTcyJct2MUPSLeqOztcJYvm5ZVNC36SMTXL1fWFlWknJasmU6w6woGo-upzddWXtCB3dhCpT4qSFOfWY_qcUQ9u8p1j6hGgjxL8ebMWUJ18z0bvQj1vkeCEOk_Ybl2rmrKXUU6mUNKu7xJgjzURWHWTK3zO8q6vR1_7Hrwhf')"></div>
                                <span class="text-white">Jules</span>
                            </td>
                            <td class="py-2 text-primary font-mono">DEPLOY_PROD</td>
                            <td class="py-2 text-right text-gray-500 pr-2">2m ago</td>
                        </tr>
                         <tr class="hover:bg-gray-800/50">
                            <td class="py-2 pl-2 flex items-center gap-2">
                                <div class="w-6 h-6 rounded-full bg-gray-700 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaxoNyupylyQn-_LRH7Yk9h5_ae-Hk-upqJrt1IM87vpF7pYiyA-p5aZlFj6iM1Us8lhTDh4NKkF0YDhkGpnpC4WZFxYLBT6Opcq0MHHBkGY2PyrkFCgZHzaEaAH2ZmpEFBpwJiyCAy1g_Hw3HaIJGdgROiAuedLr03t9f-bkDaGJ8kotNabS2vwrRqmjf6ys8y_nrcv2ynXhroyxEEqGy_MVtzkXat6m28lmN5roGG1SgkxE-UItrxb_PwAmkHW3tWnhdg5pn3l5J')"></div>
                                <span class="text-white">Alex</span>
                            </td>
                            <td class="py-2 text-white font-mono">CONFIG_CHANGE</td>
                            <td class="py-2 text-right text-gray-500 pr-2">15m ago</td>
                        </tr>
                         <tr class="hover:bg-gray-800/50">
                            <td class="py-2 pl-2 flex items-center gap-2">
                                <div class="w-6 h-6 rounded-full bg-gray-700 bg-center flex items-center justify-center text-gray-500 border border-gray-700">?</div>
                                <span class="text-red-400">UNKNOWN</span>
                            </td>
                            <td class="py-2 text-red-400 font-mono">AUTH_FAIL_3X</td>
                            <td class="py-2 text-right text-gray-500 pr-2">1h ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
"""

# JS for interactions
new_script = """
<script>
    // Lockdown Button Logic
    const lockdownBtn = document.getElementById('lockdown-btn');
    let isLockdown = false;

    lockdownBtn.addEventListener('click', () => {
        isLockdown = !isLockdown;
        if (isLockdown) {
            document.body.classList.add('border-4', 'border-red-600');
            lockdownBtn.classList.add('bg-red-600', 'text-white');
            lockdownBtn.classList.remove('bg-red-500/10', 'text-red-500');
            lockdownBtn.innerHTML = '<span class="material-symbols-outlined animate-pulse">warning</span> LOCKDOWN ACTIVE';

            // Visual Alarm Overlay
            const alarmOverlay = document.createElement('div');
            alarmOverlay.id = 'alarm-overlay';
            alarmOverlay.className = 'fixed inset-0 bg-red-900/20 pointer-events-none z-50 animate-pulse';
            document.body.appendChild(alarmOverlay);
        } else {
            document.body.classList.remove('border-4', 'border-red-600');
            lockdownBtn.classList.remove('bg-red-600', 'text-white');
            lockdownBtn.classList.add('bg-red-500/10', 'text-red-500');
            lockdownBtn.innerHTML = '<span class="material-symbols-outlined">lock</span> Lockdown Protocol';

            const overlay = document.getElementById('alarm-overlay');
            if (overlay) overlay.remove();
        }
    });

    // Simulated Scanning Animation
    const feed = document.getElementById('vuln-feed');
    setInterval(() => {
        const newLog = document.createElement('div');
        newLog.className = 'flex gap-2 text-gray-400 border-l-2 border-gray-700 pl-2 opacity-0 transition-opacity duration-500';
        newLog.innerHTML = `<span class="text-primary">SCAN</span> <span class="text-gray-500">Checking port ${Math.floor(Math.random() * 65535)}...</span>`;
        feed.prepend(newLog);

        // Trigger reflow for transition
        void newLog.offsetWidth;
        newLog.classList.remove('opacity-0');

        if (feed.children.length > 8) {
            feed.lastElementChild.remove();
        }
    }, 2000);
</script>
"""

# 1. Replace Main Content
content = re.sub(r'<main.*?</main>', new_main_content, content, flags=re.DOTALL)

# 2. Update Tailwind Config (Primary Color)
# Look for "primary": "#..." and replace with "primary": "#2dd4bf"
content = re.sub(r'"primary": "#[a-fA-F0-9]{6}"', '"primary": "#2dd4bf"', content)

# 3. Append Script
content = content.replace('</body>', new_script + '</body>')

# 4. Update Title
content = re.sub(r'<title>.*?</title>', '<title>Security Audit & Monitor</title>', content)

with open(filepath, 'w') as f:
    f.write(content)

print("Successfully generated audit.html.html content.")
