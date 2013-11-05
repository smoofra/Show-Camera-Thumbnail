
// windows scripting host script to extract the thumbnail
// with dcraw and show it with explorer

shell = WSH.CreateObject("WScript.Shell");
TemporaryFolder = 2
fso = new ActiveXObject("Scripting.FileSystemObject")

raw = WSH.Arguments(0)
jpg = fso.GetSpecialFolder(TemporaryFolder) + "\\" + fso.GetTempName() + ".jpg"
dcraw = "dcraw"

//cmd = "cmd.exe /C " +dcraw+ " -e -c \"" +raw+ "\"  >\"" +jpg+ "\"";
cmd = "cmd.exe /S /C \" \"" +dcraw+ "\" -e -c \"" +raw+ "\"  >\"" +jpg+ "\"  \" ";

// WSH.Echo(cmd)
r = shell.Run(cmd, 0, true)

if (r != 0)
{
    WSH.Echo("problem running " + cmd + "\n" + dcraw + " not in path?");
}
else
{
    shell.Run("explorer " + jpg, 0, true)
}

