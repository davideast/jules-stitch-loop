import os
from playwright.sync_api import sync_playwright, expect

def verify_forge():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Construct absolute path
        cwd = os.getcwd()
        file_url = f"file://{cwd}/site/public/forge.html.html.html"

        print(f"Navigating to: {file_url}")
        page.goto(file_url)

        # Verify Title
        print("Verifying title...")
        expect(page).to_have_title("The Forge // R&D Lab")

        # Verify Header
        print("Verifying header...")
        # Using a more flexible text match or selector if exact match fails
        expect(page.locator("h1")).to_contain_text("The Forge")

        # Verify Main Sections
        print("Verifying sections...")
        expect(page.get_by_text("Inventory", exact=False).first).to_be_visible()
        expect(page.get_by_text("The Anvil", exact=False)).to_be_visible()
        expect(page.get_by_text("Schematics", exact=False)).to_be_visible()

        # Verify Forge Button
        print("Verifying button...")
        expect(page.get_by_text("Initiate Forge Sequence")).to_be_visible()

        # Verify Primary Color Config
        print("Verifying Tailwind config...")
        config_script = page.locator("#tailwind-config")
        content = config_script.inner_text()
        if '"primary": "#2dd4bf"' in content:
            print("Primary color verified in tailwind config.")
        else:
            print("WARNING: Primary color not found in tailwind config.")
            print(content)

        # Take Screenshot
        os.makedirs("/home/jules/verification", exist_ok=True)
        screenshot_path = "/home/jules/verification/forge_verification.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_forge()
