import json
import os

filepath = 'd:/Temp/plant_disease_detection/model/model.json'

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

def process_node(node):
    # Keras 3 to Keras 2 inbound_nodes conversion
    # Keras 3: {"args": [{"class_name": "__keras_tensor__", "config": {"keras_history": ["node_name", 0, 0]}}]}
    # Keras 2: [["node_name", 0, 0, {}]]
    
    if isinstance(node, list):
        # Already Keras 2 format
        return node
        
    if isinstance(node, dict) and 'args' in node:
        args = node.get('args', [])
        kwargs = node.get('kwargs', {})
        result = []
        
        def extract(arg):
            if isinstance(arg, dict) and arg.get('class_name') == '__keras_tensor__':
                hist = arg.get('config', {}).get('keras_history')
                if hist and len(hist) >= 3:
                    return [hist[0], hist[1], hist[2], kwargs]
            return None
            
        for arg in args:
            if isinstance(arg, list):
                for sub_arg in arg:
                    ext = extract(sub_arg)
                    if ext: result.append(ext)
            else:
                ext = extract(arg)
                if ext: result.append(ext)
                
        return result
    return []

def traverse(obj):
    if isinstance(obj, dict):
        if 'inbound_nodes' in obj:
            new_nodes = []
            for n in obj['inbound_nodes']:
                processed = process_node(n)
                if processed:
                    new_nodes.append(processed)
            obj['inbound_nodes'] = new_nodes
            
        for k, v in obj.items():
            traverse(v)
    elif isinstance(obj, list):
        for item in obj:
            traverse(item)

traverse(data)

if 'modelTopology' in data and 'keras_version' in data['modelTopology']:
    data['modelTopology']['keras_version'] = '2.15.0'

with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(data, f)
print("done")
