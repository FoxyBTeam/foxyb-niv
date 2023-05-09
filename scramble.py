import random

strings = ["KR0K-HlP8Uc", "vbC-vb7LpqQ", "bmTpAIeZ2fM", "frxIV4fbhBE", "N8d_cDAIAB8", "w31wgDgct8M", "67-AFhDjXVI", "Oio7Eksy3MI", "pyhfoy0h9GE", "H-FkTpaozRI", "jeAzDJ9rvLk", "V1wu2xXka30", "oSuyEnSybvw", "Its6d0PBr0A", "ibzlP1CKL40", "1KSTYcSSGkI", "xAcrr8jJW64", "jcOgOgyGPyE"]

random.shuffle(strings)

for i in range(len(strings)):
    print(f"video{i+1}: \"{strings[i]}\",")

# This outputs a list of strings in a random order. This is useful for scrambling the order of the videos in the playlist.