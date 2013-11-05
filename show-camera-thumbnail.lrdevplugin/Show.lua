
-- Access the Lightroom SDK namespaces.
local LrDialogs = import 'LrDialogs'
local LrLogger = import 'LrLogger'
local LrShell = import 'LrShell'
local LrApplication =  import 'LrApplication'
local catalog = LrApplication:activeCatalog()

-- Create the logger and enable the print function.
local myLogger = LrLogger( 'exportLogger' )
myLogger:enable( "print" ) -- Pass either a string or a table of actions.

-- Write trace information to the logger.
local function outputToLog( message )
	myLogger:trace( message )	
end

local function foobar()

	--outputToLog( "MyHWExportItem.showModalMessage function entered...." )
	--outputToLog( catalog:getTargetPhoto():getRawMetadata("path"))

        LrShell.openFilesInApp( { catalog:getTargetPhoto():getRawMetadata("path") },  _PLUGIN.path .. "\\show.js"  )
end

import 'LrTasks'.startAsyncTask( foobar  )


