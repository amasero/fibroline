@echo on

set dirname=%~dp0
set dir=%dirname%
%dir%\jsdb\win\jsdb.exe -path %dir% %dir%\bin\Dispatch.js %*