@echo on

set dirname=%~dp0
set dir=%dirname%lib\JSBuilder
%dir%\jsdb\win\jsdb.exe -path %dir% %dir%\bin\Dispatch.js %*