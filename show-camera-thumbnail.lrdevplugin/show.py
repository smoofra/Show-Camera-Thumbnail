#!/usr/bin/python

import subprocess
import sys
import tempfile
import os

os.environ['PATH'] += ':/usr/local/bin'

with open("/Users/lawrence_danna/x", "w") as f:
    f.write(repr(os.environ))
    f.write(repr(sys.argv))

if len(sys.argv) != 2:
    raise Exception

raw = sys.argv[1]

with tempfile.NamedTemporaryFile() as jpg:

    proc = subprocess.Popen(["dcraw", "-e", "-c", raw], stdout=jpg)
    if not proc.wait() == 0:
        raise Exception, "dcraw failed"

    proc = subprocess.Popen(["open", "-W", "-n", jpg.name])
    if not proc.wait() == 0:
        raise Exception, "open failed"
    
    
