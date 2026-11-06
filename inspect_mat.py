import bpy

for m in bpy.data.materials:
    print('=== Material:', m.name)
    if m.node_tree:
        for node in m.node_tree.nodes:
            print('  Node:', node.name, '(', node.type, ')')
            if node.type == 'TEX_IMAGE' and node.image:
                print('    Image:', node.image.name, 'size:', node.image.size[:], 'has_data:', node.image.has_data)
            if node.type == 'BSDF_PRINCIPLED':
                for inp in node.inputs:
                    if inp.is_linked:
                        for l in inp.links:
                            print(f'    Connected {inp.name} <- {l.from_node.name}.{l.from_socket.name}')
                    else:
                        if inp.name in ['Base Color', 'Roughness', 'Metallic']:
                            try:
                                val = [round(x, 3) for x in inp.default_value]
                            except:
                                val = inp.default_value
                            print(f'    Default {inp.name}: {val}')

