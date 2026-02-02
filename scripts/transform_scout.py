
import re

filepath = 'queue/scout.html.html'

with open(filepath, 'r') as f:
    content = f.read()

# 1. Update Title
content = content.replace('<title>Developer Leaderboard Dashboard</title>', '<title>Talent Scout Dashboard</title>')

# 2. Update Tailwind Config (Primary to Teal/Cyan #2dd4bf)
# content = content.replace('"primary": "#238636"', '"primary": "#2dd4bf"')
# Wait, the prompt says Primary Accent: Teal/Cyan (#2dd4bf).
# The current primary is #238636 (Green).
content = re.sub(r'"primary": "#[0-9a-fA-F]{6}"', '"primary": "#2dd4bf"', content)

# 3. Construct New Main Content
new_main_content = """
<main class="flex-1 p-2 sm:p-4">
    <div class="layout-content-container flex flex-col w-full max-w-5xl mx-auto gap-6">

        <!-- Header & Search -->
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-800 pb-4">
            <h1 class="text-2xl font-bold text-white flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">visibility</span>
                Talent Scout
            </h1>
            <div class="flex gap-2">
                <button class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-90 transition-colors">
                    Draft Selected
                </button>
            </div>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-2">
            <button class="px-3 py-1.5 text-xs font-medium text-white bg-gray-800 border border-gray-700 rounded-full hover:border-primary transition-colors">High Velocity/Low Rank</button>
            <button class="px-3 py-1.5 text-xs font-medium text-gray-400 bg-transparent border border-gray-800 rounded-full hover:text-white hover:border-gray-600 transition-colors">Sleeping Giants</button>
            <button class="px-3 py-1.5 text-xs font-medium text-gray-400 bg-transparent border border-gray-800 rounded-full hover:text-white hover:border-gray-600 transition-colors">Night Owls</button>
            <button class="px-3 py-1.5 text-xs font-medium text-gray-400 bg-transparent border border-gray-800 rounded-full hover:text-white hover:border-gray-600 transition-colors">Consistency Kings</button>
        </div>

        <!-- Scatter Plot Placeholder -->
        <div class="w-full h-64 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center opacity-10">
                <span class="material-symbols-outlined text-9xl">scatter_plot</span>
            </div>
            <div class="z-10 text-center">
                <h3 class="text-lg font-medium text-white">Velocity vs. Rank Analysis</h3>
                <p class="text-sm text-gray-500">Spotting outliers with high output but low visibility.</p>
            </div>
            <!-- Simulated data points -->
            <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div class="absolute top-1/2 left-1/3 w-2 h-2 bg-gray-600 rounded-full"></div>
            <div class="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white rounded-full border-2 border-primary"></div>
        </div>

        <!-- Scout List Table -->
        <div class="overflow-hidden border border-gray-800 rounded-lg bg-gray-900/20">
            <div class="overflow-x-auto">
                <table class="min-w-full">
                    <thead class="border-b border-gray-800 bg-gray-900/50">
                        <tr>
                            <th class="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Rank</th>
                            <th class="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Developer</th>
                            <th class="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Total Ships</th>
                            <th class="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Signal</th>
                            <th class="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Growth</th>
                            <th class="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">
                        <!-- Row 1 -->
                        <tr class="hover:bg-gray-800/50 transition-colors group">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono">#42</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center gap-3">
                                    <div class="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600">
                                        <span class="text-xs font-bold text-white">JD</span>
                                    </div>
                                    <span class="text-sm font-bold text-white">J. Doe</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-white font-mono">1,240</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-end gap-0.5 h-4">
                                    <div class="w-1 h-2 bg-primary"></div>
                                    <div class="w-1 h-3 bg-primary"></div>
                                    <div class="w-1 h-4 bg-primary"></div>
                                    <div class="w-1 h-2 bg-gray-700"></div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-mono">+12%</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                    Undervalued
                                </span>
                            </td>
                        </tr>
                        <!-- Row 2 -->
                        <tr class="hover:bg-gray-800/50 transition-colors group">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono">#88</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center gap-3">
                                    <div class="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600">
                                        <span class="text-xs font-bold text-white">AK</span>
                                    </div>
                                    <span class="text-sm font-bold text-white">A. Key</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-white font-mono">980</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-end gap-0.5 h-4">
                                    <div class="w-1 h-2 bg-primary"></div>
                                    <div class="w-1 h-3 bg-primary"></div>
                                    <div class="w-1 h-4 bg-gray-700"></div>
                                    <div class="w-1 h-2 bg-gray-700"></div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-mono">+45%</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                    Rising Star
                                </span>
                            </td>
                        </tr>
                        <!-- Row 3 -->
                        <tr class="hover:bg-gray-800/50 transition-colors group">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono">#102</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center gap-3">
                                    <div class="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600">
                                        <span class="text-xs font-bold text-white">M0</span>
                                    </div>
                                    <span class="text-sm font-bold text-white">M. Zero</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-white font-mono">850</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-end gap-0.5 h-4">
                                    <div class="w-1 h-2 bg-primary"></div>
                                    <div class="w-1 h-3 bg-primary"></div>
                                    <div class="w-1 h-4 bg-primary"></div>
                                    <div class="w-1 h-3 bg-primary"></div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-mono">+8%</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                    Consistency
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</main>
"""

content = re.sub(r'<main.*?</main>', new_main_content, content, flags=re.DOTALL)

with open(filepath, 'w') as f:
    f.write(content)

print(f"Successfully transformed {filepath}")
