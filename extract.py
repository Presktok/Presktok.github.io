import re
import sys

try:
    with open('assets/index-ZXJxD7ia.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    for img in ['access_shield.png', 'inventory_system.png', 'securecc.png', 'Picture4-scaled.jpg']:
        idx = content.find(img)
        if idx != -1:
            start = max(0, idx - 300)
            end = min(len(content), idx + 300)
            print(f'=== Context for {img} ===\n{content[start:end]}\n')
except Exception as e:
    print(str(e))
