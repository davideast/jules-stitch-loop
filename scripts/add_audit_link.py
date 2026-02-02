import re
import os

filepath = 'site/public/index.html'

with open(filepath, 'r') as f:
    content = f.read()

# Define the new link
new_link = """
<a class="flex items-center gap-2 whitespace-nowrap rounded-md border border-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" href="/audit.html.html">
<span class="material-symbols-outlined text-xl">security</span>
<span>Audit</span>
</a>"""

# Define the regex to find the anchor point (after Logs link)
# Looking for the closing </a> of the Logs link
pattern = r'(<a class="[^"]*" href="/logs\.html">\s*<span class="material-symbols-outlined text-xl">terminal</span>\s*<span>System Logs</span>\s*</a>)'

# Insert the new link after the found pattern
if re.search(pattern, content):
    new_content = re.sub(pattern, r'\1' + new_link, content)
    with open(filepath, 'w') as f:
        f.write(new_content)
    print("Successfully added Audit link.")
else:
    print("Could not find anchor point.")
