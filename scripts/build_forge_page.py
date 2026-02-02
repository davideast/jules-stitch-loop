import re
import os

filepath = 'site/public/forge.html.html.html'

with open(filepath, 'r') as f:
    content = f.read()

# 1. Update Title
content = re.sub(r'<title>.*?</title>', '<title>The Forge // R&D Lab</title>', content)

# 2. Update Tailwind Primary Color
# Look for "primary": "..." and replace with "primary": "#2dd4bf"
content = re.sub(r'"primary":\s*"[^"]+"', '"primary": "#2dd4bf"', content)

# 3. New Main Content
new_main = """<main class="flex-1 p-4 sm:p-6 md:p-8 relative overflow-hidden">
<div class="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
<div class="layout-content-container flex w-full max-w-5xl flex-1 flex-col mx-auto relative z-10">

    <!-- Header -->
    <div class="flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
      <div class="flex flex-col">
          <h1 class="text-3xl font-bold font-display tracking-tight text-white flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-4xl">hardware</span>
            The Forge <span class="text-gray-600 text-lg font-mono font-normal">// R&D LAB</span>
          </h1>
          <p class="text-gray-500 mt-2 text-sm font-mono max-w-md">Craft custom badges, themes, and upgrades using resources earned from missions.</p>
      </div>
      <div class="text-right hidden sm:block">
        <div class="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">System Status</div>
        <div class="text-sm text-primary font-mono animate-pulse">● OPERATIONAL</div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Resource Inventory (Left Col) -->
        <div class="lg:col-span-4 space-y-6">
             <div class="flex items-center justify-between">
                <h2 class="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono">Inventory</h2>
                <span class="text-xs text-gray-600 font-mono">4/12 SLOTS</span>
             </div>

             <div class="grid grid-cols-2 gap-3">
                <!-- Items -->
                <div class="bg-gray-900/80 border border-gray-800 p-3 rounded-lg hover:border-primary/50 transition-all group cursor-grab active:cursor-grabbing select-none relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-1">
                        <div class="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></div>
                    </div>
                    <div class="text-[10px] text-gray-500 mb-2 font-mono">RES_ID: 0XA1</div>
                    <div class="font-bold text-white flex items-center gap-2 mb-3">
                        <span class="text-amber-500 text-xl">🪲</span>
                        <span class="text-sm">Bug Chitin</span>
                    </div>
                    <div class="flex justify-between items-end border-t border-gray-800/50 pt-2">
                         <span class="text-[10px] text-gray-600">Common</span>
                         <span class="text-xs font-mono text-primary">x42</span>
                    </div>
                </div>

                 <div class="bg-gray-900/80 border border-gray-800 p-3 rounded-lg hover:border-primary/50 transition-all group cursor-grab active:cursor-grabbing select-none">
                    <div class="text-[10px] text-gray-500 mb-2 font-mono">RES_ID: 0XB4</div>
                    <div class="font-bold text-white flex items-center gap-2 mb-3">
                        <span class="text-blue-400 text-xl">🔌</span>
                        <span class="text-sm">Logic Gates</span>
                    </div>
                    <div class="flex justify-between items-end border-t border-gray-800/50 pt-2">
                         <span class="text-[10px] text-gray-600">Rare</span>
                         <span class="text-xs font-mono text-primary">x128</span>
                    </div>
                </div>

                 <div class="bg-gray-900/80 border border-gray-800 p-3 rounded-lg hover:border-primary/50 transition-all group cursor-grab active:cursor-grabbing select-none">
                    <div class="text-[10px] text-gray-500 mb-2 font-mono">RES_ID: 0XC9</div>
                    <div class="font-bold text-white flex items-center gap-2 mb-3">
                        <span class="text-amber-800 text-xl">☕</span>
                        <span class="text-sm">Coffee</span>
                    </div>
                     <div class="flex justify-between items-end border-t border-gray-800/50 pt-2">
                         <span class="text-[10px] text-gray-600">Fuel</span>
                         <span class="text-xs font-mono text-primary">x1K</span>
                    </div>
                </div>

                <div class="bg-gray-900/80 border border-gray-800 p-3 rounded-lg hover:border-primary/50 transition-all group cursor-grab active:cursor-grabbing select-none">
                    <div class="text-[10px] text-gray-500 mb-2 font-mono">RES_ID: 0XD2</div>
                    <div class="font-bold text-white flex items-center gap-2 mb-3">
                        <span class="text-purple-400 text-xl">💎</span>
                        <span class="text-sm">Shard</span>
                    </div>
                     <div class="flex justify-between items-end border-t border-gray-800/50 pt-2">
                         <span class="text-[10px] text-gray-600">Legendary</span>
                         <span class="text-xs font-mono text-primary">x7</span>
                    </div>
                </div>
             </div>

             <!-- Stats -->
             <div class="border border-gray-800 bg-black/40 rounded p-4 font-mono text-xs space-y-2">
                <div class="flex justify-between">
                    <span class="text-gray-500">FORGE LEVEL</span>
                    <span class="text-white">IV</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">EFFICIENCY</span>
                    <span class="text-primary">+12.5%</span>
                </div>
             </div>
        </div>

        <!-- The Anvil (Center Col) -->
        <div class="lg:col-span-4 flex flex-col items-center space-y-6">
            <h2 class="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono w-full text-center">The Anvil</h2>

            <div id="anvil-zone" class="w-full aspect-square bg-gray-900/30 border-2 border-dashed border-gray-700 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-primary/70 transition-all">
                <!-- Background Grid -->
                <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>

                <div class="relative z-10 flex flex-col items-center">
                    <div class="w-24 h-24 rounded-full border border-gray-700 flex items-center justify-center bg-black/50 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                         <span class="material-symbols-outlined text-5xl text-gray-600 group-hover:text-primary transition-colors">precision_manufacturing</span>
                    </div>
                    <p class="text-gray-500 mt-2 text-xs font-mono tracking-widest">AWAITING INPUT</p>
                    <p class="text-gray-600 text-[10px] mt-1 font-mono">DRAG RESOURCES TO COMBINE</p>
                </div>

                <!-- Glow Effects -->
                <div class="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            <div class="w-full space-y-3">
                <button class="w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-gray-400 font-bold font-mono text-sm hover:text-white hover:border-primary/50 transition-all uppercase tracking-widest relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed">
                    <span class="relative z-10 flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-lg">bolt</span>
                        Initiate Forge Sequence
                    </span>
                    <div class="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <div class="flex justify-between text-[10px] text-gray-600 font-mono px-1">
                    <span>COST: 0 XP</span>
                    <span>READY</span>
                </div>
            </div>
        </div>

        <!-- Schematics (Right Col) -->
        <div class="lg:col-span-4 space-y-6">
            <div class="flex items-center justify-between">
                <h2 class="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono">Schematics</h2>
                <div class="flex gap-2">
                    <button class="text-xs text-primary hover:text-white underline decoration-dashed underline-offset-4">Blueprints</button>
                    <button class="text-xs text-gray-600 hover:text-white">History</button>
                </div>
            </div>

            <div class="space-y-3">
                <div class="bg-gray-900/40 border border-gray-800 p-4 rounded-lg flex flex-col gap-3 group hover:border-primary/50 hover:bg-gray-900/60 cursor-pointer transition-all">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-3">
                             <div class="w-10 h-10 rounded bg-green-900/20 border border-green-500/30 flex items-center justify-center text-green-500">
                                <span class="material-symbols-outlined">palette</span>
                             </div>
                             <div>
                                <div class="font-bold text-white text-sm">Theme: Matrix</div>
                                <div class="text-[10px] text-gray-500 font-mono">COSMETIC // TIER 2</div>
                             </div>
                        </div>
                        <span class="material-symbols-outlined text-gray-600 text-sm group-hover:text-primary">arrow_forward</span>
                    </div>
                    <div class="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                        <div class="bg-gray-600 h-full w-1/2"></div>
                    </div>
                    <div class="text-[10px] text-gray-500 font-mono flex justify-between">
                        <span>REQ: 50x Chitin</span>
                        <span class="text-yellow-500">MISSING RESOURCES</span>
                    </div>
                </div>

                <div class="bg-gray-900/40 border border-gray-800 p-4 rounded-lg flex flex-col gap-3 group hover:border-primary/50 hover:bg-gray-900/60 cursor-pointer transition-all opacity-75">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-3">
                             <div class="w-10 h-10 rounded bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
                                <span class="material-symbols-outlined">military_tech</span>
                             </div>
                             <div>
                                <div class="font-bold text-white text-sm">Badge: Code Ninja</div>
                                <div class="text-[10px] text-gray-500 font-mono">ACHIEVEMENT // TIER 3</div>
                             </div>
                        </div>
                        <span class="material-symbols-outlined text-gray-600 text-sm">lock</span>
                    </div>
                     <div class="text-[10px] text-gray-500 font-mono">
                        REQ: 200x Coffee, 1x Shard
                    </div>
                </div>

                <div class="bg-gray-900/40 border border-gray-800 p-4 rounded-lg flex flex-col gap-3 group hover:border-primary/50 hover:bg-gray-900/60 cursor-pointer transition-all opacity-75">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-3">
                             <div class="w-10 h-10 rounded bg-purple-900/20 border border-purple-500/30 flex items-center justify-center text-purple-500">
                                <span class="material-symbols-outlined">auto_fix_high</span>
                             </div>
                             <div>
                                <div class="font-bold text-white text-sm">Auto-Linter V2</div>
                                <div class="text-[10px] text-gray-500 font-mono">TOOL // TIER 1</div>
                             </div>
                        </div>
                         <span class="material-symbols-outlined text-gray-600 text-sm">lock</span>
                    </div>
                     <div class="text-[10px] text-gray-500 font-mono">
                        REQ: 500x Logic, 5x Shard
                    </div>
                </div>
            </div>

            <!-- Probability Module -->
             <div class="mt-6 border border-gray-800 p-4 rounded bg-black/40 relative overflow-hidden">
                <div class="relative z-10">
                    <div class="flex justify-between text-xs text-gray-400 mb-2 font-mono uppercase">
                        <span>Success Probability</span>
                        <span class="text-primary font-bold">84.2%</span>
                    </div>
                    <div class="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden mb-3">
                        <div class="bg-primary h-full w-[84.2%] shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 text-[10px] font-mono">
                        <div class="text-gray-500">RISK FACTOR: <span class="text-yellow-500">MODERATE</span></div>
                        <div class="text-gray-500 text-right">ENERGY: <span class="text-white">STABLE</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</main>"""

content = re.sub(r'<main.*?</main>', new_main, content, flags=re.DOTALL)

with open(filepath, 'w') as f:
    f.write(content)
