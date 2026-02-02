import re

index_path = 'site/public/index.html'

with open(index_path, 'r') as f:
    index_content = f.read()

# Construct the new link
new_link = """
<a class="flex items-center gap-2 whitespace-nowrap rounded-md border border-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" href="/vector.html.html.html">
<span class="material-symbols-outlined text-xl">north_east</span>
<span>Vector</span>
</a>"""

# Insert after Velocity link
# We look for the closing tag of the velocity link
pattern = r'(<a class="[^"]+" href="/velocity\.html\.html">.*?</a>)'
replacement = r'\1' + new_link

if "/vector.html.html.html" not in index_content:
    index_content = re.sub(pattern, replacement, index_content, flags=re.DOTALL)

    with open(index_path, 'w') as f:
        f.write(index_content)
    print("Updated index.html navigation.")
else:
    print("Navigation link already exists in index.html.")
