$resp = Invoke-WebRequest https://packages.grpc.io/
if ($resp.StatusCode -ne 200) {
	Write-Error $resp
	Exit -1
}
$path = "https://packages.grpc.io/" + (Select-Xml -Content $resp.Content "//build")[0].node.path
$resp = Invoke-WebRequest $path
if ($resp.StatusCode -ne 200) {
	Write-Error $resp
	Exit -1
}
$rtpath = $path.Substring(0, $path.LastIndexOf("/"))
$path = $rtpath + '/' + ((Select-Xml -Content $resp.Content "//artifact") | where-object { $_.node.name.StartsWith("grpc-protoc_windows_x64") })[0].node.path
$zipName = "grpc-protoc.zip"
Invoke-WebRequest -Uri $path -OutFile $zipName
$unzipName = "grpc-protoc"
Expand-Archive $zipName -DestinationPath $unzipName
return Resolve-Path (Join-Path $unzipName "grpc_cpp_plugin.exe")