import subprocess
import pathlib
import json

folder = pathlib.Path("src/lib/seasons") / ("s" + input("Season: ")) / "gallery"
data = json.loads(pathlib.Path(folder.parent / "gallery.json").read_text())

subprocess.Popen(["ristretto", folder])
for item in sorted(list(folder.iterdir())):
    if item.name in data:
        continue

    try:
        data[item.name] = {
            "description": input(f"{item.name} Description: "),
            "name": input(f"{item.name} Name: ")
        }

    except KeyboardInterrupt:
        break

pathlib.Path(folder.parent / "gallery.json").write_text(json.dumps(data, indent = 4))
