import os

filepath = r'd:\Temp\farmstack.html'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

style_start_idx = -1
style_end_idx = -1
script_start_idx = -1
script_end_idx = -1

for i, line in enumerate(lines):
    if '<style>' in line and style_start_idx == -1:
        style_start_idx = i
    if '</style>' in line and style_end_idx == -1:
        style_end_idx = i
    if '<script>' in line and script_start_idx == -1:
        script_start_idx = i
    if '</script>' in line and script_end_idx == -1:
        script_end_idx = i

if style_start_idx != -1 and style_end_idx != -1:
    css_lines = lines[style_start_idx+1:style_end_idx]
    with open(r'd:\Temp\style.css', 'w', encoding='utf-8') as f:
        f.writelines(css_lines)

if script_start_idx != -1 and script_end_idx != -1:
    js_lines = lines[script_start_idx+1:script_end_idx]
    with open(r'd:\Temp\script.js', 'w', encoding='utf-8') as f:
        f.writelines(js_lines)

# Now construct index.html
new_html_lines = lines[:style_start_idx] + lines[style_end_idx+1:script_start_idx] + ['    <script src=\"script.js\"></script>\n'] + lines[script_end_idx+1:]

with open(r'd:\Temp\index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_html_lines)

try:
    os.remove(filepath)
    print('farmstack.html removed.')
except OSError as e:
    print('Error removing farmstack.html:', e)

print('Separation complete.')
