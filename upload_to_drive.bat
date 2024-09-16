@echo off
set source_file1="B:\SANTI\00 EDP WEBSITE\EDP\index.html"
set source_file2="B:\SANTI\00 EDP WEBSITE\EDP\styles.css"
set source_file3="B:\SANTI\00 EDP WEBSITE\EDP\scripts.js"
set drive_folder="MyDrive:/www.elestudiodelpueblo.co"

:loop
echo.
echo Press 'U' and then 'Enter' to upload now, or wait for automatic upload every 5 minutes.
echo Waiting for 5 minutes... (You can press 'U' at any time)
call :waitForUploadOrTimeout
goto :upload

:upload
set upload_success=1

echo Uploading %source_file1%...
rclone copy %source_file1% %drive_folder% --drive-chunk-size=64M --progress
if %errorlevel% equ 0 (
    echo %source_file1% uploaded successfully!
) else (
    echo Failed to upload %source_file1%.
    set upload_success=0
)

echo Uploading %source_file2%...
rclone copy %source_file2% %drive_folder% --drive-chunk-size=64M --progress
if %errorlevel% equ 0 (
    echo %source_file2% uploaded successfully!
) else (
    echo Failed to upload %source_file2%.
    set upload_success=0
)

echo Uploading %source_file3%...
rclone copy %source_file3% %drive_folder% --drive-chunk-size=64M --progress
if %errorlevel% equ 0 (
    echo %source_file3% uploaded successfully!
) else (
    echo Failed to upload %source_file3%.
    set upload_success=0
)

if %upload_success% equ 1 (
    echo All files uploaded successfully!
) else (
    echo One or more uploads failed.
)

echo.
echo Restarting the 5-minute timer...
goto :loop

:waitForUploadOrTimeout
set /a counter=0
:waitLoop
REM Wait for 1 second
choice /n /c UX /t 1 /d X >nul
if errorlevel 2 (
    REM No key pressed, default selected
) else (
    REM 'U' key pressed
    goto :eof
)
set /a counter+=1
if %counter% geq 300 (
    REM 5 minutes have passed
    goto :eof
)
goto :waitLoop
