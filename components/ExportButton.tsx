// import React, { useState, useContext, useCallback, useEffect } from 'react';

// declare const window: any;


// exportBtn.onclick = async (evt) => {
//     const out = {};
//     const dirHandle = await window.showDirectoryPicker();  
//     await handleDirectoryEntry( dirHandle, out );
//     console.log( out );
//   };
//   async function handleDirectoryEntry( dirHandle, out ) {
//     for await (const entry of dirHandle.values()) {
//       if (entry.kind === "file"){
//         const file = await entry.getFile();
//         out[ file.name ] = file;
//       }
//       if (entry.kind === "directory") {
//         const newHandle = await dirHandle.getDirectoryHandle( entry.name, { create: false } );
//         const newOut = out[ entry.name ] = {};
//         await handleDirectoryEntry( newHandle, newOut );
//       }
//     }
//   }

//   document.getElementById('exportBtn').addEventListener('click', async () => {
//     const out = {};
//     const dirHandle = await window.showDirectoryPicker();  
//     await handleDirectoryEntry( dirHandle, out );
//     console.log( out );
//   };
//   async function handleDirectoryEntry( dirHandle, out ) {
//     for await (const entry of dirHandle.values()) {
//       if (entry.kind === "file"){
//         const file = await entry.getFile();
//         out[ file.name ] = file;
//       }
//       if (entry.kind === "directory") {
//         const newHandle = await dirHandle.getDirectoryHandle( entry.name, { create: false } );
//         const newOut = out[ entry.name ] = {};
//         await handleDirectoryEntry( newHandle, newOut );
//       }
//     }
//   });