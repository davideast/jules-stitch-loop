
import os
import re

def main():
    root_dir = 'site/public'
    index_path = os.path.join(root_dir, 'index.html')

    with open(index_path, 'r') as f:
        index_content = f.read()

    # Extract header
    # Assuming <header ...> ... </header>
    header_match = re.search(r'(<header.*?</header>)', index_content, re.DOTALL)
    if not header_match:
        print("Could not find header in index.html")
        return

    header_content = header_match.group(1)
    print(f"Extracted header ({len(header_content)} chars).")

    # Iterate files
    count = 0
    for filename in os.listdir(root_dir):
        if filename.endswith('.html') and filename != 'index.html':
            filepath = os.path.join(root_dir, filename)
            with open(filepath, 'r') as f:
                content = f.read()

            # Replace header
            new_content = re.sub(r'<header.*?</header>', header_content, content, flags=re.DOTALL)

            if content != new_content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Updated {filename}")
                count += 1
            else:
                print(f"No change needed for {filename} (or header not found)")

    print(f"Sync complete. Updated {count} files.")

if __name__ == "__main__":
    main()
