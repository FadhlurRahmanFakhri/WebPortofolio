import bpy

print('=== SCENE OBJECTS ===')
for obj in bpy.context.scene.objects:
    print(f"{obj.name} | Type: {obj.type} | Loc: {[round(x,2) for x in obj.location]} | Scale: {[round(x,2) for x in obj.scale]} | Hidden: {obj.hide_get()} | RenderHidden: {obj.hide_render}")

print('\n=== COLLECTIONS ===')
for col in bpy.data.collections:
    print(f"Collection '{col.name}': {[o.name for o in col.objects]}")

