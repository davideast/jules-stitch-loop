import re

index_path = 'site/public/index.html'
forge_path = 'site/public/forge.html.html.html'

with open(index_path, 'r') as f:
    index_content = f.read()

# Construct the new link
new_link = """
<a class="flex items-center gap-2 whitespace-nowrap rounded-md border border-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" href="/forge.html.html.html">
<span class="material-symbols-outlined text-xl">build</span>
<span>The Forge</span>
</a>"""

# Insert after Missions link
# We look for the closing tag of the missions link
pattern = r'(<a class="[^"]+" href="/missions\.html\.html">.*?</a>)'
replacement = r'\1' + new_link

if "/forge.html.html.html" not in index_content:
    index_content = re.sub(pattern, replacement, index_content, flags=re.DOTALL)

    with open(index_path, 'w') as f:
        f.write(index_content)
    print("Updated index.html navigation.")
else:
    print("Navigation link already exists in index.html.")

# Extract Header
header_match = re.search(r'(<header.*?</header>)', index_content, re.DOTALL)
if header_match:
    new_header = header_match.group(1)

    # Update Forge Page
    with open(forge_path, 'r') as f:
        forge_content = f.read()

    forge_content = re.sub(r'<header.*?</header>', new_header, forge_content, flags=re.DOTALL)

    with open(forge_path, 'w') as f:
        f.write(forge_content)
    print("Updated forge.html.html.html header.")
else:
    print("Could not find header in index.html")
