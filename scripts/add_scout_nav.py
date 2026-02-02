
import re
import os

index_path = 'site/public/index.html'

with open(index_path, 'r') as f:
    index_content = f.read()

# Construct the new link
new_link = """
<a class="flex items-center gap-2 whitespace-nowrap rounded-md border border-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" href="/scout.html.html">
<span class="material-symbols-outlined text-xl">visibility</span>
<span>Talent Scout</span>
</a>"""

# Insert after Rivals link
# We look for the closing tag of the rivals link
# The rivals link is:
# <a ... href="/rivals.html">
# ...
# </a>

pattern = r'(<a [^>]*href="/rivals\.html"[^>]*>.*?</a>)'

if "/scout.html.html" not in index_content:
    match = re.search(pattern, index_content, re.DOTALL)
    if match:
        print("Found Rivals link. Inserting Scout link after it.")
        # Insert new link after the found link (including newline)
        replacement = match.group(1) + '\n' + new_link
        index_content = index_content.replace(match.group(1), replacement)

        with open(index_path, 'w') as f:
            f.write(index_content)
        print("Updated index.html navigation.")
    else:
        print("Could not find Rivals link in index.html. Trying alternatives...")
        # Fallback: Insert at end of header nav?
        # Maybe search for compare.html
        pattern_alt = r'(<a [^>]*href="/compare\.html"[^>]*>.*?</a>)'
        match_alt = re.search(pattern_alt, index_content, re.DOTALL)
        if match_alt:
             print("Found Compare link. Inserting Scout link after it.")
             replacement = match_alt.group(1) + '\n' + new_link
             index_content = index_content.replace(match_alt.group(1), replacement)
             with open(index_path, 'w') as f:
                f.write(index_content)
             print("Updated index.html navigation.")
        else:
             print("Could not find suitable anchor in index.html.")

else:
    print("Navigation link already exists in index.html.")
