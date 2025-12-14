# OneDrive Symlink Issue Fix

## Problem
OneDrive creates symlinks in the `.next` folder that Next.js can't handle on Windows, causing `EINVAL: invalid argument, readlink` errors.

## Solutions

### Solution 1: Exclude .next from OneDrive (RECOMMENDED)
1. Right-click the `.next` folder
2. Select "OneDrive" → "Free up space" or "Always keep on this device"
3. Or exclude the entire project folder from OneDrive sync

### Solution 2: Use Clean Script
Run: `npm run dev:clean` (this will clean and start)

### Solution 3: Manual Clean Before Dev
```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

### Solution 4: Move Project Outside OneDrive
Move the project to a location like:
- `C:\Projects\Dhruv`
- `C:\Dev\Dhruv`
- Any folder NOT synced by OneDrive

## Quick Fix Command
```powershell
Remove-Item -Recurse -Force .next; npm run dev
```

