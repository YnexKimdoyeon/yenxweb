/* (가상) 로드원 체험판, 아이콘 */
var ICONS = {"chat": ["0 0 20 20", "<path d=\"M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z\"></path><path d=\"M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z\"></path>"], "bars": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z\" clip-rule=\"evenodd\"></path>"], "mStore": ["0 0 20 20", "<path d=\"M2.879 7.121A3 3 0 007.5 6.66a2.997 2.997 0 002.5 1.34 2.997 2.997 0 002.5-1.34 3 3 0 104.622-3.78l-.293-.293A2 2 0 0015.415 2H4.585a2 2 0 00-1.414.586l-.292.292a3 3 0 000 4.243zM3 9.032a4.507 4.507 0 004.5-.29A4.48 4.48 0 0010 9.5a4.48 4.48 0 002.5-.758 4.507 4.507 0 004.5.29V16.5h.25a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5H3V9.032z\"></path>"], "mUsers": ["0 0 20 20", "<path d=\"M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z\"></path>"], "mDoc": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"></path>"], "mMoney": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z\" clip-rule=\"evenodd\"></path>"], "mChart": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z\" clip-rule=\"evenodd\"></path>"], "mUserPlus": ["0 0 20 20", "<path d=\"M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z\"></path>"], "mKey": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z\" clip-rule=\"evenodd\"></path>"], "mTruck": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z\" clip-rule=\"evenodd\"></path>"], "mBox": ["0 0 20 20", "<path d=\"M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z\"></path><path fill-rule=\"evenodd\" d=\"M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z\" clip-rule=\"evenodd\"></path>"], "mSheet": ["0 0 20 20", "<path d=\"M5.127 3.502L5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0012.75 2h-5.5a2.25 2.25 0 00-2.123 1.502zM1 10.25A2.25 2.25 0 013.25 8h13.5A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5zM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 015.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 00-.123-.002H3.25z\"></path>"], "mGroup": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"></path>"], "mBell": ["0 0 20 20", "<path d=\"M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z\"></path><path d=\"M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z\"></path>"], "mApi": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z\" clip-rule=\"evenodd\"></path>"], "search20": ["0 0 20 20", "<path fill-rule=\"evenodd\" d=\"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z\" clip-rule=\"evenodd\"></path>"], "store": ["0 0 24 24", "<path d=\"M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z\"></path><path fill-rule=\"evenodd\" d=\"M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z\" clip-rule=\"evenodd\"></path>"], "key": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z\" clip-rule=\"evenodd\"></path>"], "download": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z\" clip-rule=\"evenodd\"></path>"], "search": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z\" clip-rule=\"evenodd\"></path>"], "plus": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z\" clip-rule=\"evenodd\"></path>"], "edit": ["0 0 24 24", "<path d=\"M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z\"></path><path d=\"M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z\"></path>"], "trash": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z\" clip-rule=\"evenodd\"></path>"], "group": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z\" clip-rule=\"evenodd\"></path><path d=\"M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z\"></path>"], "upload": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z\" clip-rule=\"evenodd\"></path>"], "check": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z\" clip-rule=\"evenodd\"></path>"], "cash": ["0 0 24 24", "<path d=\"M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z\"></path><path fill-rule=\"evenodd\" d=\"M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z\" clip-rule=\"evenodd\"></path><path d=\"M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z\"></path>"], "docText": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z\" clip-rule=\"evenodd\"></path><path d=\"M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z\"></path>"], "archive": ["0 0 24 24", "<path d=\"M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z\"></path><path fill-rule=\"evenodd\" d=\"M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z\" clip-rule=\"evenodd\"></path>"], "arrows": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z\" clip-rule=\"evenodd\"></path>"], "refresh": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z\" clip-rule=\"evenodd\"></path>"], "x": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z\" clip-rule=\"evenodd\"></path>"], "eyeSlash": ["0 0 24 24", "<path d=\"M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z\"></path><path d=\"M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z\"></path><path d=\"M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z\"></path>"], "chevL": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z\" clip-rule=\"evenodd\"></path>"], "chevR": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z\" clip-rule=\"evenodd\"></path>"], "table": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z\" clip-rule=\"evenodd\"></path>"], "chevD": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z\" clip-rule=\"evenodd\"></path>"], "sort": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm0 4.5A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm15-.75A.75.75 0 0118 9v10.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V9a.75.75 0 01.75-.75zm-15 5.25a.75.75 0 01.75-.75h9.75a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z\" clip-rule=\"evenodd\"></path>"], "minus": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z\" clip-rule=\"evenodd\"></path>"], "shield": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z\" clip-rule=\"evenodd\"></path>"], "cog": ["0 0 24 24", "<path fill-rule=\"evenodd\" d=\"M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z\" clip-rule=\"evenodd\"></path>"]}
/* (가상) 로드원, 타이어 도매 B2B 주문·재고 관리 체험판
 * 화면 구성과 클래스는 실제 납품 시스템을 따르고, 데이터는 모두 가상이다.
 */
;(function () {
  var D = window.Demo
  var E = D.esc
  var N = D.num

  function ic(name, cls, wh) {
    var d = ICONS[name]
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + d[0] + '" fill="currentColor" aria-hidden="true" class="' + cls + '"' +
      (wh ? ' width="' + wh + '" height="' + wh + '"' : '') + '>' + d[1] + '</svg>'
    )
  }

  /* ───────── 가상 데이터 ───────── */
  var seed = 7341
  function rnd() {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  function ri(a, b) { return a + Math.floor(rnd() * (b - a + 1)) }
  function pick(a) { return a[Math.floor(rnd() * a.length)] }
  function r100(x) { return Math.round(x / 100) * 100 }
  function pad(n, w) { return String(n).padStart(w, '0') }

  var TODAY = D.day(0)
  var YM = TODAY.slice(0, 7)
  var YEAR = TODAY.slice(0, 4)
  function monthStart(ym) { return ym + '-01' }
  function monthEnd(ym) {
    var y = +ym.slice(0, 4), m = +ym.slice(5, 7)
    return ym + '-' + pad(new Date(y, m, 0).getDate(), 2)
  }

  var BRANDS = ['금호', '한국', '넥센', '미쉐린', '콘티넨탈', '피렐리', '던롭', '브릿지스톤', '굿이어', '요코하마', '페더럴', '사일룬', '트라이앵글', 'BFG', '라우펜', '브레데스타인']
  var BR_CODE = { 금호: 'KH', 한국: 'HK', 넥센: 'NX', 미쉐린: 'MC', 콘티넨탈: 'CT', 피렐리: 'PR', 던롭: 'DL', 브릿지스톤: 'BS', 굿이어: 'GY', 요코하마: 'YH', 페더럴: 'FD', 사일룬: 'SL', 트라이앵글: 'TA', BFG: 'BF', 라우펜: 'LF', 브레데스타인: 'BD' }
  var BR_MODELS = { 금호: 4, 한국: 4, 넥센: 4, 미쉐린: 3, 콘티넨탈: 2, 피렐리: 3, 던롭: 0, 브릿지스톤: 3, 굿이어: 2, 요코하마: 1, 페더럴: 0, 사일룬: 0, 트라이앵글: 1, BFG: 1, 라우펜: 2, 브레데스타인: 1 }
  var SEASON = { 'all-weathers': '사계절', winter: '겨울', summer: '여름' }
  var SERIES = [
    ['에코 투어러', 'all-weathers', ''],
    ['컴포트 플러스', 'all-weathers', '흡음재'],
    ['스포츠 GT', 'summer', ''],
    ['올시즌 AS', 'all-weathers', ''],
    ['SUV 트렉 HT', 'all-weathers', ''],
    ['윈터 그립', 'winter', ''],
    ['퍼포먼스 X', 'summer', '흡음재'],
    ['시티 라이드', 'all-weathers', ''],
  ]
  var SIZES = [
    ['225/45R17', '94W'], ['245/45R18', '100W'], ['205/55R16', '91V'], ['215/55R17', '94V'], ['225/45R18', '95W'],
    ['225/55R17', '97W'], ['235/45R18', '98W'], ['235/55R19', '105V'], ['245/45R19', '102Y'], ['245/40R19', '98Y'],
    ['255/45R20', '105W'], ['265/60R18', '110H'], ['195/65R15', '91H'], ['225/40R19', '93Y'], ['275/35R20', '102Y'], ['235/60R18', '107V'],
  ]
  function sizeDigits(s) { return String(s || '').replace(/\D/g, '') }

  var warehouses = [
    { id: 1, name: '본사창고' }, { id: 2, name: '2창고' }, { id: 3, name: '3창고' }, { id: 4, name: '남부센터' },
    { id: 5, name: '북부센터' }, { id: 6, name: '동부센터' }, { id: 7, name: '서부센터' }, { id: 8, name: '반품창고' },
  ]
  var sheets = [
    { id: 1, name: '(가상) 로드원 본사', isDefault: true, whIds: [1, 2, 3, 4, 5, 6, 7, 8] },
    { id: 2, name: '(가상) 한빛모터스', whIds: [4, 5] },
    { id: 3, name: '(가상) 대한타이어', whIds: [6, 7] },
    { id: 4, name: '(가상) 새길타이어 남부점', whIds: [1, 4] },
  ]

  var products = []
  var pseq = 1
  BRANDS.forEach(function (b) {
    var used = {}
    for (var m = 0; m < BR_MODELS[b]; m++) {
      var s
      do { s = pick(SERIES) } while (used[s[0]])
      used[s[0]] = 1
      var model = s[0] + ' ' + BR_CODE[b] + (m + 3)
      var nSizes = ri(2, 4)
      var start = ri(0, SIZES.length - 1)
      for (var k = 0; k < nSizes; k++) {
        var sz = SIZES[(start + k * 3) % SIZES.length]
        var price = r100(ri(820, 3900) * 100 + 900) - 100 + 0
        var stock = {}
        warehouses.forEach(function (w) { stock[w.id] = rnd() < 0.35 ? 0 : ri(1, w.id === 1 ? 48 : 22) })
        var prev = rnd() < 0.5 ? [{ label: (+YEAR.slice(2) ) + '년 ' + pick([3, 4, 6]) + '월전', price: r100(price * (1.04 + rnd() * 0.1)) }] : []
        products.push({
          id: pseq,
          brand: b,
          name: model,
          code: BR_CODE[b] + '-D' + pad(pseq, 3),
          size: sz[0],
          ssli: sz[1],
          marking: pick(['', '', 'XL', 'RF', 'EV']),
          origin: pick(['KR', 'KR', 'CN', 'JP', 'HU', 'TH', 'ID']),
          special: s[2],
          etc: pick(['', '', '', 'OE 규격', '전기차 대응']),
          season: s[1],
          price: price,
          prev: prev,
          alias: '',
          memo: '',
          hidden: false,
          stock: stock,
        })
        pseq++
      }
    }
  })
  // 데모용 대표 사이즈(2254517 / 2454518)가 여러 브랜드에서 검색되도록 보정
  ;['금호', '한국', '넥센', '미쉐린', '피렐리', '라우펜'].forEach(function (b, i) {
    var list = products.filter(function (p) { return p.brand === b })
    var p = list[list.length - 1]
    var sz = SIZES[i % 2]
    if (p) { p.size = sz[0]; p.ssli = sz[1] }
  })

  var sites = [
    { id: 1, code: 'S01', name: '(가상) 로드원 본점', bizNo: '000-00-00001', owner: '김가상', tel: '010-0000-0101', addr: '(가상) 서울시 가상구 예시로 10', memo: '본사', whIds: [1, 2, 3] },
    { id: 2, code: 'S02', name: '(가상) 로드원 남부지점', bizNo: '000-00-00002', owner: '이가상', tel: '010-0000-0102', addr: '(가상) 부산시 예시구 샘플로 22', memo: '', whIds: [4, 8] },
    { id: 3, code: 'S03', name: '(가상) 로드원 북부지점', bizNo: '000-00-00003', owner: '박가상', tel: '010-0000-0103', addr: '(가상) 경기도 가상시 데모길 5', memo: '물류 전용', whIds: [5, 6, 7] },
  ]

  var pGroups = ['우수거래처', '일반', '신규']
  var partners = [
    ['(가상) 대한타이어유통', '대한유통', '매입처', '김대한'],
    ['(가상) 한성타이어상사', '한성상사', '매입처', '최한성'],
    ['(가상) 동방휠앤타이어', '동방휠', '매입처', '정동방'],
    ['(가상) 중앙타이어물류', '중앙물류', '매입매출처', '오중앙'],
    ['(가상) 한빛모터스', '한빛', '매출처', '한빛나'],
    ['(가상) 새길카센터', '새길', '매출처', '윤새길'],
    ['(가상) 미래타이어 남부점', '미래남부', '매출처', '강미래'],
    ['(가상) 오성자동차정비', '오성정비', '매출처', '서오성'],
    ['(가상) 스피드휠', '스피드휠', '매출처', '문스피'],
    ['(가상) 그린오토', '그린오토', '매출처', '임그린'],
  ].map(function (r, i) {
    var n = i + 1
    return {
      id: n, code: 'C' + pad(n, 3), mgmt: 'M-' + pad(n, 2), hills: n % 3 === 0 ? 'Y' : 'N', channel: pick(['전화', '방문', '온라인']),
      name: r[0], abbr: r[1], type: r[2], group: pGroups[n % 3], lv: String(ri(1, 3)), owner: r[3], manager: r[3], referrer: '',
      tel: '02-000-0' + pad(100 + n, 3), phone: '010-0000-' + pad(2000 + n, 4), fax: '02-000-0' + pad(500 + n, 3),
      bizNo: '000-00-000' + pad(10 + n, 2), payDay: pick(['말일', '10일', '25일']), payMemo: '', zip: '00000',
      addr: '(가상) 예시도 가상시 샘플로 ' + (n * 3), addr2: n + '층', bizType: '도소매', item: '타이어', priceType: pick(['도매가', '특가']),
      email: 'partner' + n + '@example.com', siteId: (n % 3) + 1, hidden: false, dc: pick([0, 3, 5]), createdAt: D.day(-200 + n * 7),
    }
  })

  var PERMS = ['재고 전체(레거시)', '재고 수정', '엑셀 다운로드', '엑셀 업로드', '재고 챗봇검색', '상세재고 표시(정확 수량)', '최종재고 조회', '상세(생산연도/DOT) 조회', '주문 관리', '상품 관리', '매입 전표', '매출 전표', '할인율 그룹']
  var roles = [
    { id: 1, name: '(가상) 전체 관리', perms: ['할인율 그룹', '재고 수정', '엑셀 다운로드', '재고 챗봇검색', '상세재고 표시(정확 수량)', '엑셀 업로드', '최종재고 조회', '상세(생산연도/DOT) 조회', '주문 관리', '상품 관리', '매입 전표', '매출 전표'] },
    { id: 2, name: '(가상) 재고 조회·수정', perms: ['재고 전체(레거시)', '재고 챗봇검색', '주문 관리'] },
  ]

  var users = [
    ['demo_admin', '(가상) 로드원 관리자', 0, true],
    ['hanbit01', '(가상) 한빛모터스', 2],
    ['saegil02', '(가상) 새길카센터', 2],
    ['mirae03', '(가상) 미래타이어 남부점', 2],
    ['ohsung04', '(가상) 오성자동차정비', 2],
    ['speed05', '(가상) 스피드휠', 2],
    ['green06', '(가상) 그린오토', 2],
    ['jungang07', '(가상) 중앙타이어물류', 1],
    ['wheel08', '(가상) 바른휠정비', 2],
    ['star09', '(가상) 별빛카케어', 2],
    ['top10', '(가상) 탑타이어', 2],
  ].map(function (r, i) {
    var n = i + 1
    return { id: n, uid: r[0], name: r[1], owner: '담당' + n, roleId: r[2] || null, master: !!r[3], siteId: n % 4 === 0 ? 1 : null, phone: '010-0000-' + pad(3000 + n, 4), email: r[0] + '@example.com', addr: '(가상) 예시시 가상동 ' + n + '번지' }
  })

  var notices = [
    { id: 1, date: D.day(-2), top: true, title: '(가상) 겨울용 타이어 사전 주문 안내', content: '겨울용 타이어 사전 주문을 받습니다. 주문 관리에서 접수 상태를 확인할 수 있습니다.\n(체험판 가상 공지입니다.)' },
    { id: 2, date: D.day(-9), top: false, title: '(가상) 남부센터 출고 시간 변경', content: '남부센터 당일 출고 마감 시간이 오후 4시로 변경됩니다.\n(체험판 가상 공지입니다.)' },
    { id: 3, date: D.day(-21), top: false, title: '(가상) 시스템 점검 안내', content: '주말 새벽 시간에 시스템 점검이 있습니다.\n(체험판 가상 공지입니다.)' },
  ]

  function modelsOf(brandFilter) {
    var seen = {}, out = []
    products.forEach(function (p) {
      if (brandFilter && p.brand !== brandFilter) return
      var k = p.brand + ' ' + p.name
      if (!seen[k]) { seen[k] = 1; out.push(k) }
    })
    return out
  }
  var allModels = modelsOf('')
  function modelsLike(word) { return allModels.filter(function (m) { return m.indexOf(word) >= 0 }) }
  var pgroups = [
    { id: 1, name: '윈터', aliases: ['WIN', '스노우'], models: modelsLike('윈터 그립') },
    { id: 2, name: 'SUV HT', aliases: ['HT'], models: modelsLike('SUV 트렉') },
    { id: 3, name: '컴포트', aliases: [], models: modelsLike('컴포트 플러스') },
    { id: 4, name: '스포츠', aliases: ['GT', 'SPT'], models: modelsLike('스포츠 GT') },
    { id: 5, name: '올시즌', aliases: ['AS'], models: modelsLike('올시즌 AS') },
  ].filter(function (g) { return g.models.length })

  var dcGroups = [
    { id: 1, name: '(가상) A등급 도매', memo: '월 200본 이상 거래처', rates: { 2024: 28, 2025: 30, 2026: 32 } },
    { id: 2, name: '(가상) 일반 정비소', memo: '', rates: { 2024: 18, 2025: 20, 2026: 21 } },
  ]
  var purchaseRates = BRANDS.filter(function (b) { return BR_MODELS[b] }).map(function (b) { return { brand: b, y2025: ri(30, 42), y2026: ri(31, 44) } })

  // 전표 (매입/매출)
  var slips = []
  var sid = 1
  function addSlip(kind, partnerId, date, p, qty, wh, discount, memo) {
    var price = r100(p.price * (kind === 'purchase' ? 0.58 + rnd() * 0.06 : 0.7 + rnd() * 0.08))
    var s = { id: sid++, kind: kind, partnerId: partnerId, date: date, productId: p.id, qty: qty, price: price, discount: discount || 0, wh: wh, memo: memo || '' }
    slips.push(s)
    return s
  }
  var buyers = partners.filter(function (p) { return p.type !== '매입처' })
  var sellers = partners.filter(function (p) { return p.type !== '매출처' })
  for (var i = 0; i < 70; i++) {
    var kind = i % 3 === 0 ? 'purchase' : 'sales'
    var pp = kind === 'purchase' ? pick(sellers) : pick(buyers)
    addSlip(kind, pp.id, D.day(-ri(0, 80)), pick(products), pick([2, 4, 4, 8]), pick([1, 1, 2, 4, 5]), rnd() < 0.2 ? 5000 : 0)
  }
  var payments = []
  var paySeq = 1
  partners.forEach(function (pt) {
    var n = ri(1, 2)
    for (var j = 0; j < n; j++) {
      payments.push({ id: paySeq++, date: D.day(-ri(1, 60)), partnerId: pt.id, kind: pt.type === '매입처' ? 'out' : 'in', amount: ri(30, 260) * 10000, memo: pick(['계좌이체', '현금', '어음 결제']), writer: '(가상) 관리자' })
    }
  })

  var ORDER_STATUS = { 1: '주문 확인중', 3: '배송중', 4: '배송완료' }
  var orders = []
  var oseq = 1
  for (var o = 0; o < 10; o++) {
    var u = users[1 + (o % (users.length - 1))]
    var items = [{ productId: pick(products).id, qty: pick([2, 4]) }]
    if (rnd() < 0.4) items.push({ productId: pick(products).id, qty: 4 })
    var st = o < 4 ? 1 : o < 7 ? 3 : 4
    orders.push({ id: oseq++, date: D.day(-ri(0, o < 7 ? 12 : 40)) + ' ' + pad(ri(9, 18), 2) + ':' + pad(ri(0, 59), 2), userId: u.id, items: items, status: st, ship: st > 1 ? pick(['택배 발송', '직접 배송', '화물 발송']) : '', memo: '' })
  }
  orders.sort(function (a, b) { return a.date < b.date ? 1 : -1 })

  /* ───────── 계산 도우미 ───────── */
  function byId(list, id) { id = +id; for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null }
  function nextId(list) { return list.reduce(function (m, x) { return Math.max(m, x.id) }, 0) + 1 }
  function whName(id) { var w = byId(warehouses, id); return w ? w.name : '-' }
  function sheetWh(sheetId) {
    if (sheetId === '__ALL__') {
      var set = {}
      sheets.forEach(function (s) { s.whIds.forEach(function (w) { set[w] = 1 }) })
      return warehouses.filter(function (w) { return set[w.id] })
    }
    var sh = byId(sheets, sheetId)
    return sh ? sh.whIds.map(function (id) { return byId(warehouses, id) }).filter(Boolean) : []
  }
  function stockOf(p, whs) { return whs.reduce(function (s, w) { return s + (p.stock[w.id] || 0) }, 0) }
  function slipAmt(s) {
    var supply = s.qty * s.price
    var vat = Math.round(supply * 0.1)
    return { supply: supply, vat: vat, discount: s.discount, total: supply + vat - s.discount, qty: s.qty }
  }
  function sumSlips(list) {
    var t = { supply: 0, vat: 0, discount: 0, total: 0, qty: 0 }
    list.forEach(function (s) { var a = slipAmt(s); for (var k in t) t[k] += a[k] })
    return t
  }
  // 거래처 잔액: 매출은 미수(+), 매입은 미불(+)
  function balanceOf(partnerId, kind, before) {
    var sl = slips.filter(function (s) { return s.partnerId === partnerId && s.kind === kind && (!before || s.date < before) })
    var pk = kind === 'sales' ? 'in' : 'out'
    var pay = payments.filter(function (x) { return x.partnerId === partnerId && x.kind === pk && (!before || x.date < before) })
    return sumSlips(sl).total - pay.reduce(function (a, x) { return a + x.amount }, 0)
  }
  function applyStock(s, sign) {
    var p = byId(products, s.productId)
    if (!p) return
    var d = (s.kind === 'purchase' ? 1 : -1) * sign * s.qty
    p.stock[s.wh] = Math.max(0, (p.stock[s.wh] || 0) + d)
  }
  function pLabel(p) { return p ? p.brand + ' ' + p.name + ' ' + p.size : '(삭제된 제품)' }
  function md(d) { return d.slice(5, 7) + '-' + d.slice(8, 10) }

  /* ───────── 화면 상태 ───────── */
  var ui = {
    menuGroup: {},
    modal: null,
    home: { q: '' },
    bs: { field: 'name', q: '', applied: '', top: 50, sel: null },
    pt: { tab: 'all', site: '', group: '', q: '', top: 200, hidden: false, checked: {}, groupSel: '' },
    slip: {
      purchase: { partnerId: null, q: '', ym: YM, day: '', site: '', wh: '1', sel: null, entryP: '' },
      sales: { partnerId: null, q: '', ym: YM, day: '', site: '', wh: '1', sel: null, entryP: '' },
    },
    sq: { site: '', q: '', partnerId: null, wh: '', ym: YM, kind: 'all', done: false },
    pay: { mode: 'month', from: monthStart(YM), to: monthEnd(YM), kind: 'all', q: '', applied: null },
    users: { q: '' },
    order: { status: '0', ym: YM },
    prod: { sheet: '__ALL__', vis: 'all', brand: '', name: '', size: '', code: '', page: 1, checked: {} },
    ss: { sheet: 1, brand: '', desc: false, zoom: 150, open: false, model: '' },
    newSheet: '',
  }
  ui.pay.applied = { from: ui.pay.from, to: ui.pay.to, kind: 'all', q: '' }

  function refresh() {
    var a = document.activeElement
    var k = a && a.getAttribute ? a.getAttribute('data-k') : null
    var pos = null
    try { pos = a.selectionStart } catch (e) {}
    D.update()
    if (k) {
      var el = document.querySelector('[data-k="' + k + '"]')
      if (el) {
        el.focus()
        try { if (pos != null) el.setSelectionRange(pos, pos) } catch (e) {}
      }
    }
  }
  function closeModal() { ui.modal = null; refresh() }
  D.on('closeModal', function () { closeModal() })

  /* ───────── 상단 머리글 / 메뉴 ───────── */
  var LOGO =
    '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="40" viewBox="0 0 128 40" role="img" aria-label="(가상) 로드원">' +
    '<text x="1" y="9" font-size="9" font-weight="700" fill="#9ca3af">(가상)</text>' +
    '<text x="0" y="29" font-size="21" font-weight="900" font-style="italic" fill="#111" letter-spacing="-1">로드원</text>' +
    '<circle cx="66" cy="26" r="2.6" fill="#ff1616"/>' +
    '<rect x="0" y="33" width="84" height="2" fill="#111"/><rect x="0" y="37" width="70" height="1.5" fill="#111"/>' +
    '<g transform="translate(103 21)" fill="none" stroke="#111"><circle r="16" stroke-width="3"/><circle r="11" stroke-width="2"/>' +
    '<circle r="3" fill="#111"/><path d="M0-11V-3M0 3V11M-11 0H-3M3 0H11M-7.8-7.8L-2.1-2.1M2.1 2.1L7.8 7.8M7.8-7.8L2.1-2.1M-2.1 2.1L-7.8 7.8" stroke-width="2"/></g></svg>'

  function menuLink(href, icon, label) {
    return '<li><a href="#' + href + '">' + ic(icon, 'w-6 h-6 mr-4', 24) + label + '</a></li>'
  }
  function header(path) {
    var g1 = /^\/manage\/(purchase|sales|slips|payments)/.test(path)
    var g2 = /^\/manage\/(users|roles)/.test(path)
    return (
      '<div class="drawer drawer-end"><input id="my-drawer" type="checkbox" class="drawer-toggle">' +
      '<div class="drawer-content"><nav class="navbar bg-base-100 lg:px-16 px-2"><div class="flex-1"><a href="#/">' + LOGO + '</a></div>' +
      '<div class="flex-none gap-1"><a class="btn btn-ghost btn-circle" title="챗봇" aria-label="챗봇" href="#/chat">' + ic('chat', 'w-6 h-6 text-neutral-600', 24) + '</a>' +
      '<label for="my-drawer" class="btn btn-ghost btn-circle" aria-label="메뉴">' + ic('bars', 'w-6 h-6 text-neutral-600', 24) + '</label></div></nav></div>' +
      '<div class="drawer-side z-50"><label for="my-drawer" class="drawer-overlay"></label><ul class="menu p-4 w-80 min-h-full bg-base-100 menu-lg">' +
      '<li class="my-4 text-neutral-500">(가상) 관리자님 (마스터 관리자)</li>' +
      menuLink('/manage/basic/business-sites', 'mStore', '기초등록') +
      menuLink('/manage/basic/partners', 'mUsers', '거래처 관리') +
      '<li><details' + (g1 ? ' open' : '') + '><summary>' + ic('mDoc', 'w-6 h-6 mr-4', 24) + '전표관리</summary><ul>' +
      menuLink('/manage/purchase', 'mDoc', '매입') + menuLink('/manage/sales', 'mMoney', '매출') +
      menuLink('/manage/slips', 'mChart', '매입매출조회') + menuLink('/manage/payments', 'mMoney', '입출금 조회') + '</ul></details></li>' +
      '<li><details' + (g2 ? ' open' : '') + '><summary>' + ic('mUsers', 'w-6 h-6 mr-4', 24) + '회원관리</summary><ul>' +
      menuLink('/manage/users', 'mUsers', '회원 관리') + menuLink('/manage/users/register', 'mUserPlus', '회원 등록') +
      menuLink('/manage/roles', 'mKey', '역할 관리') + '</ul></details></li>' +
      menuLink('/manage/order', 'mTruck', '주문 관리') +
      menuLink('/manage/product', 'mBox', '상품 관리') +
      menuLink('/manage/spreadsheet', 'mChart', '재고 관리') +
      menuLink('/manage/inventory-sheets', 'mSheet', '재고표(창고)관리') +
      menuLink('/manage/product-groups', 'mGroup', '제품 그룹') +
      menuLink('/manage/notices', 'mBell', '공지 관리') +
      menuLink('/manage/partner-keys', 'mApi', '거래처 API 키') +
      menuLink('/manage/dc-groups', 'mDoc', '할인율 그룹') +
      menuLink('/chat', 'chat', '챗봇') +
      '<div class="divider my-1"></div><li class="text-neutral-500"><a data-act="logout"><div class="mx-5"></div>로그아웃</a></li>' +
      '</ul></div></div>'
    )
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.drawer-side a[href]')
    if (a) { var t = document.getElementById('my-drawer'); if (t) t.checked = false }
  })
  D.on('logout', function () { D.toast('체험판에서는 로그아웃 없이 계속 둘러볼 수 있습니다') })

  function modal(inner, boxCls) {
    return '<dialog class="modal" open><div class="modal-box' + (boxCls ? ' ' + boxCls : '') + '">' + inner + '</div>' +
      '<form class="modal-backdrop" method="dialog"><button data-act="closeModal">close</button></form></dialog>'
  }
  function opts(list, sel, emptyLabel) {
    var h = emptyLabel != null ? '<option value=""' + (sel === '' || sel == null ? ' selected' : '') + '>' + E(emptyLabel) + '</option>' : ''
    return h + list.map(function (o) { return '<option value="' + E(o[0]) + '"' + (String(sel) === String(o[0]) ? ' selected' : '') + '>' + E(o[1]) + '</option>' }).join('')
  }
  function brandOpts(sel, emptyLabel) { return opts(BRANDS.map(function (b) { return [b, b] }), sel, emptyLabel) }
  function toastDemo(what) { D.toast((what ? what + ', ' : '') + '체험판에서는 실제 파일·외부 연동이 동작하지 않습니다') }

  /* ───────── 홈: 사이즈 검색 ───────── */
  function homeResults() {
    var q = sizeDigits(ui.home.q)
    if (q.length < 3) return ''
    var whs = sheetWh('__ALL__')
    var list = products.filter(function (p) { return !p.hidden && sizeDigits(p.size).indexOf(q) === 0 })
    list.sort(function (a, b) { return stockOf(b, whs) - stockOf(a, whs) })
    if (!list.length) return '<div class="text-center py-10 text-base-content/50 mb-12">검색 결과가 없습니다. 예: 2254517, 2454518</div>'
    return (
      '<div class="mb-12"><p class="text-sm text-base-content/60 mb-2">검색 결과 <b>' + list.length + '</b>건</p>' +
      '<div class="overflow-x-auto border border-base-200 rounded-lg"><table class="table w-full"><thead><tr class="bg-base-200">' +
      '<th>브랜드</th><th>제품명</th><th>사이즈</th><th>SS/LI</th><th>계절</th><th>특수</th><th class="text-right">공장도가</th><th class="text-center">재고</th><th class="text-center">주문</th></tr></thead><tbody>' +
      list.map(function (p) {
        var st = stockOf(p, whs)
        return '<tr class="hover"><td>' + E(p.brand) + '</td><td class="font-semibold">' + E(p.name) + '</td><td>' + E(p.size) + '</td><td>' + E(p.ssli) + '</td><td>' + E(SEASON[p.season]) + '</td><td>' + E(p.special) + '</td>' +
          '<td class="text-right">' + N(p.price) + '</td><td class="text-center">' + (st > 0 ? '<span class="font-semibold text-blue-600">' + N(st) + '</span>' : '<span class="badge badge-ghost badge-sm">품절</span>') + '</td>' +
          '<td class="text-center whitespace-nowrap"><input type="number" min="1" value="4" class="input input-bordered input-xs w-14" id="hq-' + p.id + '"> <button class="btn btn-primary btn-xs" data-act="homeOrder" data-id="' + p.id + '"' + (st > 0 ? '' : ' disabled') + '>주문</button></td></tr>'
      }).join('') +
      '</tbody></table></div></div>'
    )
  }
  function noticeModal() {
    var n = byId(notices, ui.modal.id)
    if (!n) return ''
    return '<dialog class="modal" open><div class="modal-box text-center"><h3 class="font-bold text-lg">' + E(n.title) + '</h3>' +
      '<div class="text-right"><button class="btn btn-sm mr-2"><a href="#/manage/notices/' + n.id + '/edit">수정</a></button><button class="btn btn-sm btn-error" data-act="noticeDel" data-id="' + n.id + '">삭제</button></div>' +
      '<div class="text-base mb-4 break-keep overflow-y-auto max-h-96 quill">' + E(n.content).replace(/\n/g, '<br>') + '</div>' +
      '<div class="modal-action w-full"><button class="btn flex-1" data-act="closeModal">닫기</button></div></div>' +
      '<form class="modal-backdrop" method="dialog"><button data-act="closeModal">close</button></form></dialog>'
  }
  function sortedNotices() {
    return notices.slice().sort(function (a, b) { return (b.top - a.top) || (a.date < b.date ? 1 : -1) })
  }
  function pageHome() {
    return (
      '<div class="container"><div class="mb-4"><h2 class="text-3xl\tfont-bold text-center"><span style="color:var(--run-red-1)">사이즈</span>를 입력해주세요.</h2></div>' +
      '<form data-submit="homeSearch" class="max-w-3xl w-full flex border border-solid border-current rounded-lg py-2 px-4 mb-12 mx-auto">' +
      '<input type="number" name="q" placeholder="2454518" class="input-bordered flex-1" value="' + E(ui.home.q) + '" data-input="homeQ" aria-label="타이어 사이즈">' +
      '<button class="btn-ghost" aria-label="검색">' + ic('search20', 'w-8 h-8') + '</button></form>' +
      '<div id="home-results">' + homeResults() + '</div>' +
      '<div><h2 class="font-semibold text-2xl py-4">공지</h2>' +
      '<div class="divide-y border-t border-b">' +
      sortedNotices().map(function (n) {
        return '<div class="flex items-center gap-3 py-3 px-2 cursor-pointer hover:bg-base-200" data-act="noticeOpen" data-id="' + n.id + '">' +
          (n.top ? '<span class="badge badge-primary badge-sm">공지</span>' : '') + '<span class="flex-1">' + E(n.title) + '</span><span class="text-sm text-base-content/50">' + E(n.date) + '</span></div>'
      }).join('') +
      '</div>' + (ui.modal && ui.modal.type === 'notice' ? noticeModal() : '') + '</div></div>'
    )
  }
  D.on('homeQ', function (v) {
    ui.home.q = v
    var el = document.getElementById('home-results')
    if (el) el.innerHTML = homeResults()
  })
  D.on('homeSearch', function (v) { ui.home.q = v.q || ''; refresh() })
  D.on('homeOrder', function (d) {
    var p = byId(products, d.id)
    var qEl = document.getElementById('hq-' + d.id)
    var qty = Math.max(1, parseInt(qEl && qEl.value, 10) || 1)
    orders.unshift({ id: nextId(orders), date: TODAY + ' ' + new Date().toTimeString().slice(0, 5), userId: 1, items: [{ productId: p.id, qty: qty }], status: 1, ship: '', memo: '' })
    D.toast(pLabel(p) + ' ' + qty + '본 주문, 주문 관리에서 확인할 수 있습니다')
  })
  D.on('noticeOpen', function (d) { ui.modal = { type: 'notice', id: +d.id }; refresh() })
  D.on('noticeDel', function (d) {
    notices = notices.filter(function (n) { return n.id !== +d.id })
    ui.modal = null
    D.toast('공지를 삭제했습니다')
    refresh()
  })

  /* ───────── 기초등록: 사업장 ───────── */
  function basicTabs(which) {
    return '<h1 class="text-2xl font-bold mb-3">기초등록</h1><div class="tabs tabs-lg mb-4">' +
      '<a class="tab tab-bordered text-base ' + (which === 'bs' ? 'tab-active font-semibold' : '') + '" href="#/manage/basic/business-sites">사업장(지점) 관리</a>' +
      '<a class="tab tab-bordered text-base ' + (which === 'pt' ? 'tab-active font-semibold' : '') + '" href="#/manage/basic/partners">거래처 등록/관리</a></div>'
  }
  var BS_FIELDS = [['name', '상호'], ['bizNo', '사업자번호'], ['owner', '대표자명'], ['tel', '연락처'], ['addr', '주소'], ['memo', '메모']]
  function bsList() {
    var q = ui.bs.applied.trim()
    return sites.filter(function (s) { return !q || String(s[ui.bs.field] || '').indexOf(q) >= 0 }).slice(0, ui.bs.top)
  }
  function bsModal() {
    var s = ui.modal.id ? byId(sites, ui.modal.id) : { name: '', bizNo: '', owner: '', tel: '', addr: '', memo: '' }
    var f = function (k, l, ph) { return '<div><label class="label label-text text-xs">' + l + '</label><input name="' + k + '" class="input input-bordered input-sm w-full" value="' + E(s[k]) + '"' + (ph ? ' placeholder="' + ph + '"' : '') + '></div>' }
    return modal('<h3 class="font-bold text-lg mb-4">' + (ui.modal.id ? '사업장 수정' : '사업장 추가') + '</h3><form data-submit="bsSave"><div class="grid gap-3">' +
      f('name', '상호 *', '(가상) 상호') + '<div class="grid grid-cols-2 gap-2">' + f('bizNo', '사업자번호', '000-00-00000') + f('owner', '대표자') + '</div>' +
      f('tel', '연락처', '010-0000-0000') + f('addr', '주소') + f('memo', '메모') +
      '</div><div class="modal-action"><button type="button" class="btn btn-sm" data-act="closeModal">취소</button><button class="btn btn-primary btn-sm">' + (ui.modal.id ? '저장' : '추가') + '</button></div></form>')
  }
  function bsWhModal() {
    var s = byId(sites, ui.bs.sel)
    return modal('<h3 class="font-bold text-lg mb-1">사업장별 창고지정</h3><p class="text-sm text-base-content/60 mb-4">' + E(s.name) + '</p><div class="grid grid-cols-2 gap-2">' +
      warehouses.map(function (w) {
        return '<label class="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" class="checkbox checkbox-sm" data-change="bsWhToggle" data-w="' + w.id + '"' + (s.whIds.indexOf(w.id) >= 0 ? ' checked' : '') + '>' + E(w.name) + '</label>'
      }).join('') + '</div><div class="modal-action"><button class="btn btn-primary btn-sm" data-act="closeModal">확인</button></div>')
  }
  function pageBusinessSites() {
    var list = bsList()
    return (
      '<div class="w-full max-w-[1800px] mx-auto p-4 sm:p-6">' + basicTabs('bs') + '<div>' +
      '<div class="flex flex-wrap items-center gap-2 mb-3"><div class="flex items-center gap-1 text-sm"><span class="text-base-content/70">검색제한(Top)</span>' +
      '<input type="number" min="1" class="input input-bordered input-sm w-20" value="' + ui.bs.top + '" data-change="bsTop"></div>' +
      '<span class="text-sm text-base-content/70">자료수: <b>' + list.length + '</b></span><div class="flex-1"></div>' +
      '<button class="btn btn-outline btn-sm" data-act="bsWh">' + ic('store', 'w-4 h-4') + '사업장별 창고지정</button>' +
      '<button class="btn btn-outline btn-sm" data-act="demoOnly" data-what="사업장 권한 설정">' + ic('key', 'w-4 h-4') + '사업장 권한 설정</button>' +
      '<button class="btn btn-outline btn-success btn-sm" data-act="demoOnly" data-what="엑셀 다운로드">' + ic('download', 'w-4 h-4') + '엑셀 다운로드</button></div>' +
      '<form class="flex flex-wrap items-center gap-2 mb-3" data-submit="bsSearch"><select name="field" class="select select-bordered select-sm">' + opts(BS_FIELDS, ui.bs.field) + '</select>' +
      '<input name="q" class="input input-bordered input-sm w-48" placeholder="검색어" value="' + E(ui.bs.q) + '">' +
      '<button class="btn btn-neutral btn-sm">' + ic('search', 'w-4 h-4') + '조회</button><div class="flex-1"></div>' +
      '<button type="button" class="btn btn-primary btn-sm" data-act="bsAdd">' + ic('plus', 'w-4 h-4') + '추가</button>' +
      '<button type="button" class="btn btn-outline btn-sm" data-act="bsEdit">' + ic('edit', 'w-4 h-4') + '수정</button>' +
      '<button type="button" class="btn btn-outline btn-error btn-sm" data-act="bsDel">' + ic('trash', 'w-4 h-4') + '삭제</button></form>' +
      '<div class="overflow-x-auto border border-base-200 rounded-lg"><table class="table table-zebra w-full"><thead><tr><th class="w-16">코드</th><th>상호</th><th>사업자번호</th><th>대표자</th><th>연락처</th><th>주소</th><th>메모</th></tr></thead><tbody>' +
      (list.length ? list.map(function (s) {
        return '<tr class="cursor-pointer' + (ui.bs.sel === s.id ? ' active' : '') + '" data-act="bsSel" data-id="' + s.id + '"><td>' + E(s.code) + '</td><td>' + E(s.name) + '</td><td>' + E(s.bizNo) + '</td><td>' + E(s.owner) + '</td><td>' + E(s.tel) + '</td><td>' + E(s.addr) + '</td><td>' + E(s.memo) + '</td></tr>'
      }).join('') : '<tr><td colspan="7" class="text-center py-10 text-base-content/60">등록된 사업장이 없습니다.</td></tr>') +
      '</tbody></table></div></div>' +
      (ui.modal && ui.modal.type === 'bs' ? bsModal() : '') + (ui.modal && ui.modal.type === 'bsWh' ? bsWhModal() : '') +
      '</div>'
    )
  }
  D.on('demoOnly', function (d) { toastDemo(d.what) })
  D.on('bsTop', function (v) { ui.bs.top = Math.max(1, +v || 50); refresh() })
  D.on('bsSearch', function (v) { ui.bs.field = v.field; ui.bs.q = v.q; ui.bs.applied = v.q; refresh() })
  D.on('bsSel', function (d) { ui.bs.sel = ui.bs.sel === +d.id ? null : +d.id; refresh() })
  D.on('bsAdd', function () { ui.modal = { type: 'bs', id: null }; refresh() })
  D.on('bsEdit', function () {
    if (!ui.bs.sel) return D.toast('수정할 사업장 행을 먼저 선택하세요')
    ui.modal = { type: 'bs', id: ui.bs.sel }; refresh()
  })
  D.on('bsWh', function () {
    if (!ui.bs.sel) return D.toast('창고를 지정할 사업장 행을 먼저 선택하세요')
    ui.modal = { type: 'bsWh' }; refresh()
  })
  D.on('bsWhToggle', function (v, el) {
    var s = byId(sites, ui.bs.sel), w = +el.dataset.w
    if (el.checked) { if (s.whIds.indexOf(w) < 0) s.whIds.push(w) } else s.whIds = s.whIds.filter(function (x) { return x !== w })
  })
  D.on('bsDel', function () {
    if (!ui.bs.sel) return D.toast('삭제할 사업장 행을 먼저 선택하세요')
    sites = sites.filter(function (s) { return s.id !== ui.bs.sel })
    ui.bs.sel = null
    D.toast('사업장을 삭제했습니다')
    refresh()
  })
  D.on('bsSave', function (v) {
    if (!v.name.trim()) return D.toast('상호를 입력하세요')
    if (ui.modal.id) {
      var s = byId(sites, ui.modal.id)
      ;['name', 'bizNo', 'owner', 'tel', 'addr', 'memo'].forEach(function (k) { s[k] = v[k] })
      D.toast('사업장을 수정했습니다')
    } else {
      var id = nextId(sites)
      sites.push({ id: id, code: 'S' + pad(id, 2), name: v.name, bizNo: v.bizNo, owner: v.owner, tel: v.tel, addr: v.addr, memo: v.memo, whIds: [] })
      ui.bs.sel = id
      D.toast('사업장을 추가했습니다')
    }
    ui.modal = null
    refresh()
  })

  /* ───────── 기초등록: 거래처 ───────── */
  var PT_COLS = [
    ['group', '그룹'], ['type', '거래구분'], ['code', '코드'], ['mgmt', '관리코드'], ['hills', '힐스펫동의'], ['channel', '채널'], ['name', '상호명'], ['abbr', '약칭'], ['group', '그룹'], ['lv', 'LV'],
    ['owner', '대표자'], ['manager', '담당자'], ['referrer', '소개처'], ['tel', '전화번호'], ['phone', '핸드폰'], ['fax', '팩스'], ['bizNo', '사업.주민번호'], ['_bal', '현잔액'], ['payDay', '결제일'], ['payMemo', '결제예정일메모'],
    ['zip', '우편번호'], ['addr', '주소'], ['addr2', '번지'], ['bizType', '업태'], ['item', '종목'], ['priceType', '적용단가'], ['email', '이메일'], ['', '주문ID'], ['', '비고1'], ['', '메모1'],
    ['', '메모2'], ['', '메모3(Ⅰ)'], ['', '메모3(Ⅱ)'], ['', '메모3(Ⅲ)'], ['', '메모3(Ⅳ)'], ['_vat', '부가세'], ['', '전화2'], ['', '전화3'], ['', '전화4'], ['', '한도금액'],
    ['', '개업일'], ['createdAt', '최초 등록일'], ['createdAt', '최종 수정일'], ['_last', '최종거래일'], ['_writer', '최종수정자'], ['', '스마트 발주'], ['manager', '거래 담당자'], ['tel', '담당자 연락처'], ['phone', '담당자 휴대폰'], ['owner', '결제 담당자'],
    ['tel', '담당자 연락처'], ['phone', '담당자 휴대폰'], ['', '미수유예일'], ['_siteCode', '사업장코드'], ['_site', '관할사업장명'], ['_vat', '부가세명'], ['_stop', '거래중지여부'], ['_inv', '계산서 형태'], ['', '쇼핑몰연동정보'], ['_dc', '할인율'],
    ['', '포인트기준'], ['', 'CMS코드'],
  ]
  function partnerBalance(p) {
    var b = 0
    if (p.type !== '매입처') b += balanceOf(p.id, 'sales')
    if (p.type !== '매출처') b -= balanceOf(p.id, 'purchase')
    return b
  }
  function ptCell(p, key) {
    switch (key) {
      case '': return ''
      case '_bal': return N(partnerBalance(p))
      case '_vat': return '별도'
      case '_last':
        var l = slips.filter(function (s) { return s.partnerId === p.id }).map(function (s) { return s.date }).sort().pop()
        return l || ''
      case '_writer': return '(가상) 관리자'
      case '_siteCode': var s1 = byId(sites, p.siteId); return s1 ? s1.code : ''
      case '_site': var s2 = byId(sites, p.siteId); return s2 ? s2.name : ''
      case '_stop': return p.hidden ? '중지' : '거래'
      case '_inv': return '전자'
      case '_dc': return p.dc ? p.dc + '%' : ''
      default: return p[key]
    }
  }
  function ptFiltered(ignoreTab) {
    var q = ui.pt.q.trim()
    return partners.filter(function (p) {
      if (!ui.pt.hidden && p.hidden) return false
      if (!ignoreTab && ui.pt.tab !== 'all' && p.type !== ui.pt.tab) return false
      if (ui.pt.site && String(p.siteId) !== ui.pt.site) return false
      if (ui.pt.group && p.group !== ui.pt.group) return false
      if (q && [p.name, p.abbr, p.owner, p.bizNo, p.tel, p.phone].join(' ').indexOf(q) < 0) return false
      return true
    })
  }
  function ptChecked() { return partners.filter(function (p) { return ui.pt.checked[p.id] }) }
  function ptModal() {
    var p = ui.modal.id ? byId(partners, ui.modal.id) : { name: '', abbr: '', type: '매출처', group: '일반', owner: '', manager: '', tel: '', phone: '', bizNo: '', addr: '', email: '', siteId: 1 }
    var f = function (k, l, ph) { return '<div><label class="label label-text text-xs">' + l + '</label><input name="' + k + '" class="input input-bordered input-sm w-full" value="' + E(p[k]) + '"' + (ph ? ' placeholder="' + ph + '"' : '') + '></div>' }
    return modal('<h3 class="font-bold text-lg mb-4">' + (ui.modal.id ? '거래처 수정' : '거래처 추가') + '</h3><form data-submit="ptSave"><div class="grid gap-3">' +
      f('name', '상호명 *', '(가상) 상호') + '<div class="grid grid-cols-2 gap-2">' + f('abbr', '약칭') +
      '<div><label class="label label-text text-xs">거래구분</label><select name="type" class="select select-bordered select-sm w-full">' + opts([['매입처', '매입처'], ['매출처', '매출처'], ['매입매출처', '매입매출처']], p.type) + '</select></div></div>' +
      '<div class="grid grid-cols-2 gap-2"><div><label class="label label-text text-xs">그룹</label><select name="group" class="select select-bordered select-sm w-full">' + opts(pGroups.map(function (g) { return [g, g] }), p.group) + '</select></div>' +
      '<div><label class="label label-text text-xs">관할사업장</label><select name="siteId" class="select select-bordered select-sm w-full">' + opts(sites.map(function (s) { return [s.id, s.name] }), p.siteId) + '</select></div></div>' +
      '<div class="grid grid-cols-2 gap-2">' + f('owner', '대표자') + f('manager', '담당자') + '</div>' +
      '<div class="grid grid-cols-2 gap-2">' + f('tel', '전화번호', '02-000-0000') + f('phone', '핸드폰', '010-0000-0000') + '</div>' +
      f('bizNo', '사업자번호', '000-00-00000') + f('addr', '주소') + f('email', '이메일', 'name@example.com') +
      '</div><div class="modal-action"><button type="button" class="btn btn-sm" data-act="closeModal">취소</button><button class="btn btn-primary btn-sm">' + (ui.modal.id ? '저장' : '추가') + '</button></div></form>')
  }
  function ptGroupModal() {
    return modal('<h3 class="font-bold text-lg mb-4">그룹 관리</h3><ul class="divide-y border rounded-lg mb-3">' +
      pGroups.map(function (g) {
        var n = partners.filter(function (p) { return p.group === g }).length
        return '<li class="flex items-center justify-between px-3 py-2"><span>' + E(g) + ' <span class="text-xs text-base-content/50">(' + n + ')</span></span><button class="btn btn-ghost btn-xs text-error" data-act="ptGroupDel" data-g="' + E(g) + '">' + ic('trash', 'w-3.5 h-3.5') + '</button></li>'
      }).join('') + '</ul><form class="flex gap-2" data-submit="ptGroupAdd"><input name="g" class="input input-bordered input-sm flex-1" placeholder="새 그룹 이름"><button class="btn btn-primary btn-sm">' + ic('plus', 'w-4 h-4') + '추가</button></form>' +
      '<div class="modal-action"><button class="btn btn-sm" data-act="closeModal">닫기</button></div>')
  }
  function pagePartners() {
    var all = ptFiltered(true)
    var cnt = function (t) { return all.filter(function (p) { return t === 'all' || p.type === t }).length }
    var list = ptFiltered(false).slice(0, ui.pt.top)
    var checked = ptChecked()
    var tab = function (t, l) { return '<a class="tab tab-bordered ' + (ui.pt.tab === t ? 'tab-active font-semibold' : '') + '" data-act="ptTab" data-t="' + t + '">' + l + ' (' + cnt(t) + ')</a>' }
    var canGroup = checked.length && ui.pt.groupSel
    return (
      '<div class="w-full max-w-[1800px] mx-auto p-4 sm:p-6">' + basicTabs('pt') + '<div>' +
      '<div class="tabs mb-3">' + tab('all', '전체') + tab('매입처', '매입처') + tab('매출처', '매출처') + tab('매입매출처', '매입매출처') + '</div>' +
      '<div class="flex flex-wrap items-center gap-2 mb-2">' +
      '<select class="select select-bordered select-sm" data-change="ptSite">' + opts(sites.map(function (s) { return [s.id, s.name] }), ui.pt.site, '전체 사업장') + '</select>' +
      '<select class="select select-bordered select-sm" data-change="ptGroup">' + opts(pGroups.map(function (g) { return [g, g] }), ui.pt.group, '전체 그룹') + '</select>' +
      '<input class="input input-bordered input-sm w-56" placeholder="전체검색 (상호/약칭/대표자/사업자번호/전화…)" value="' + E(ui.pt.q) + '" data-input="ptQ" data-k="ptq">' +
      '<button class="btn btn-neutral btn-sm" data-act="ptRefresh">' + ic('search', 'w-4 h-4') + '조회</button>' +
      '<div class="flex items-center gap-1 text-sm ml-2"><span class="text-base-content/70">Top</span><input type="number" min="1" class="input input-bordered input-sm w-20" value="' + ui.pt.top + '" data-change="ptTop"></div>' +
      '<label class="flex items-center gap-1 text-sm cursor-pointer"><input type="checkbox" class="checkbox checkbox-sm" data-change="ptHidden"' + (ui.pt.hidden ? ' checked' : '') + '>숨김 포함</label></div>' +
      '<div class="flex flex-wrap items-center gap-2 mb-3"><span class="text-sm text-base-content/70">자료수: <b>' + list.length + '</b></span><div class="flex-1"></div>' +
      '<button class="btn btn-primary btn-sm" data-act="ptAdd">' + ic('plus', 'w-4 h-4') + '추가</button>' +
      '<button class="btn btn-outline btn-sm" data-act="ptEdit">' + ic('edit', 'w-4 h-4') + '수정</button>' +
      '<button class="btn btn-outline btn-error btn-sm" data-act="ptDel">' + ic('trash', 'w-4 h-4') + '삭제</button>' +
      '<div class="divider divider-horizontal mx-0"></div>' +
      '<select class="select select-bordered select-sm" title="그룹 선택" data-change="ptGroupSel">' + opts(pGroups.map(function (g) { return [g, g] }), ui.pt.groupSel, '그룹 선택') + '</select>' +
      '<button class="btn btn-outline btn-sm" data-act="ptGroupApply" data-mode="add"' + (canGroup ? '' : ' disabled') + '>그룹에 추가</button>' +
      '<button class="btn btn-outline btn-sm" data-act="ptGroupApply" data-mode="remove"' + (canGroup ? '' : ' disabled') + '>그룹 해제</button>' +
      '<button class="btn btn-outline btn-sm" data-act="ptGroupMgr">' + ic('group', 'w-4 h-4') + '그룹 관리</button>' +
      '<button class="btn btn-outline btn-success btn-sm" data-act="demoOnly" data-what="엑셀 출력">' + ic('download', 'w-4 h-4') + '엑셀 출력</button>' +
      '<button class="btn btn-outline btn-info btn-sm" data-act="demoOnly" data-what="엑셀 가져오기">' + ic('upload', 'w-4 h-4') + '엑셀 가져오기</button></div>' +
      '<div class="overflow-x-auto border border-base-200 rounded-lg"><table class="table table-zebra w-full"><thead><tr>' +
      '<th class="w-8"><input type="checkbox" class="checkbox checkbox-sm" aria-label="전체 선택" data-change="ptCheckAll"' + (list.length && list.every(function (p) { return ui.pt.checked[p.id] }) ? ' checked' : '') + '></th>' +
      PT_COLS.map(function (c) { return '<th class="whitespace-nowrap">' + c[1] + '</th>' }).join('') + '</tr></thead><tbody>' +
      (list.length ? list.map(function (p) {
        return '<tr' + (p.hidden ? ' class="opacity-50"' : '') + '><td><input type="checkbox" class="checkbox checkbox-sm" data-change="ptCheck" data-id="' + p.id + '"' + (ui.pt.checked[p.id] ? ' checked' : '') + '></td>' +
          PT_COLS.map(function (c) { return '<td class="whitespace-nowrap">' + E(ptCell(p, c[0])) + '</td>' }).join('') + '</tr>'
      }).join('') : '<tr><td colspan="63" class="text-center py-10 text-base-content/60">거래처가 없습니다.</td></tr>') +
      '</tbody></table></div></div>' +
      (ui.modal && ui.modal.type === 'pt' ? ptModal() : '') + (ui.modal && ui.modal.type === 'ptGroup' ? ptGroupModal() : '') +
      '</div>'
    )
  }
  D.on('ptTab', function (d) { ui.pt.tab = d.t; refresh() })
  D.on('ptSite', function (v) { ui.pt.site = v; refresh() })
  D.on('ptGroup', function (v) { ui.pt.group = v; refresh() })
  D.on('ptQ', function (v) { ui.pt.q = v; refresh() })
  D.on('ptRefresh', function () { refresh() })
  D.on('ptTop', function (v) { ui.pt.top = Math.max(1, +v || 200); refresh() })
  D.on('ptHidden', function (v, el) { ui.pt.hidden = el.checked; refresh() })
  D.on('ptCheck', function (v, el) { ui.pt.checked[el.dataset.id] = el.checked; refresh() })
  D.on('ptCheckAll', function (v, el) { ptFiltered(false).forEach(function (p) { ui.pt.checked[p.id] = el.checked }); refresh() })
  D.on('ptGroupSel', function (v) { ui.pt.groupSel = v; refresh() })
  D.on('ptGroupApply', function (d) {
    var list = ptChecked()
    list.forEach(function (p) { p.group = d.mode === 'add' ? ui.pt.groupSel : '' })
    D.toast(list.length + '곳을 「' + ui.pt.groupSel + '」 그룹' + (d.mode === 'add' ? '에 추가했습니다' : '에서 해제했습니다'))
    refresh()
  })
  D.on('ptGroupMgr', function () { ui.modal = { type: 'ptGroup' }; refresh() })
  D.on('ptGroupAdd', function (v) {
    var g = (v.g || '').trim()
    if (!g || pGroups.indexOf(g) >= 0) return D.toast('새 그룹 이름을 입력하세요')
    pGroups.push(g); refresh()
  })
  D.on('ptGroupDel', function (d) {
    pGroups = pGroups.filter(function (g) { return g !== d.g })
    partners.forEach(function (p) { if (p.group === d.g) p.group = '' })
    refresh()
  })
  D.on('ptAdd', function () { ui.modal = { type: 'pt', id: null }; refresh() })
  D.on('ptEdit', function () {
    var c = ptChecked()
    if (c.length !== 1) return D.toast('수정할 거래처 하나를 체크하세요')
    ui.modal = { type: 'pt', id: c[0].id }; refresh()
  })
  D.on('ptDel', function () {
    var c = ptChecked()
    if (!c.length) return D.toast('삭제할 거래처를 체크하세요')
    partners = partners.filter(function (p) { return !ui.pt.checked[p.id] })
    ui.pt.checked = {}
    D.toast(c.length + '곳을 삭제했습니다')
    refresh()
  })
  D.on('ptSave', function (v) {
    if (!v.name.trim()) return D.toast('상호명을 입력하세요')
    var p
    if (ui.modal.id) p = byId(partners, ui.modal.id)
    else {
      var id = nextId(partners)
      p = { id: id, code: 'C' + pad(id, 3), mgmt: '', hills: 'N', channel: '전화', lv: '1', referrer: '', fax: '', payDay: '말일', payMemo: '', zip: '', addr2: '', bizType: '도소매', item: '타이어', priceType: '도매가', hidden: false, dc: 0, createdAt: TODAY }
      partners.push(p)
    }
    ;['name', 'abbr', 'type', 'group', 'owner', 'manager', 'tel', 'phone', 'bizNo', 'addr', 'email'].forEach(function (k) { p[k] = v[k] })
    p.siteId = +v.siteId
    D.toast(ui.modal.id ? '거래처를 수정했습니다' : '거래처를 추가했습니다')
    ui.modal = null
    refresh()
  })

  /* ───────── 매입/매출 전표 ───────── */
  function slipPage(kind) {
    var st = ui.slip[kind]
    var isP = kind === 'purchase'
    var L = isP ? { t: '매입전표', bal: '미불금/전미불', prev: '전미불', pay: '출금', rest: '미불금' } : { t: '매출전표', bal: '미수금/전미수', prev: '전미수', pay: '입금', rest: '미수금' }
    var partner = st.partnerId ? byId(partners, st.partnerId) : null
    var mine = partner ? slips.filter(function (s) { return s.kind === kind && s.partnerId === partner.id }) : []
    var monthRows = mine.filter(function (s) { return s.date.slice(0, 7) === st.ym }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : a.id - b.id })
    var shown = st.day ? monthRows.filter(function (s) { return s.date === st.day }) : monthRows
    var dayKey = st.day || (st.ym === YM ? TODAY : monthStart(st.ym))
    var selRow = st.sel ? byId(slips, st.sel) : null
    var z = { supply: 0, vat: 0, discount: 0, total: 0, qty: 0 }
    var rKun = selRow && partner ? slipAmt(selRow) : z
    var rDay = sumSlips(mine.filter(function (s) { return s.date === dayKey }))
    var rMon = sumSlips(monthRows)
    var rYear = sumSlips(mine.filter(function (s) { return s.date.slice(0, 4) === st.ym.slice(0, 4) }))
    var prev = 0, paid = 0
    if (partner) {
      prev = balanceOf(partner.id, kind, monthStart(st.ym))
      var pk = isP ? 'out' : 'in'
      paid = payments.filter(function (x) { return x.partnerId === partner.id && x.kind === pk && x.date.slice(0, 7) === st.ym }).reduce(function (a, x) { return a + x.amount }, 0)
    }
    var rest = prev + rMon.total - paid
    var sumRow = function (label, r, last) {
      return '<tr><td class="text-center font-semibold">' + label + '</td><td class="text-right">' + N(r.supply) + '</td><td class="text-right">' + N(r.vat) + '</td><td class="text-right">' + N(r.discount) + '</td><td class="text-right">' + N(r.total) + '</td><td class="text-right">' + N(r.qty) + '</td><td class="text-right font-semibold text-error">' + (last != null ? N(last) : '') + '</td></tr>'
    }
    var pickList = ''
    var q = st.q.trim()
    if (q && (!partner || q !== partner.name)) {
      var cands = partners.filter(function (p) { return (isP ? p.type !== '매출처' : p.type !== '매입처') && (p.name + p.abbr).indexOf(q) >= 0 })
      pickList = '<ul class="menu bg-base-100 rounded-lg shadow-lg border border-base-200 absolute left-0 top-full mt-1 w-64 " style="z-index:20">' +
        (cands.length ? cands.map(function (p) { return '<li><a data-act="slipPick" data-kind="' + kind + '" data-id="' + p.id + '">' + E(p.name) + ' <span class="text-xs text-base-content/50">' + E(p.type) + '</span></a></li>' }).join('') : '<li class="text-xs text-base-content/50 p-2">검색 결과가 없습니다.</li>') + '</ul>'
    }
    var whOpts = opts(warehouses.map(function (w) { return [w.id, w.name] }), st.wh, '선택')
    var btnRow =
      (isP
        ? '<button type="button" class="btn btn-outline btn-warning btn-sm"' + (partner ? '' : ' disabled') + ' title="출금(준 돈) 입력" data-act="payOpen" data-kind="' + kind + '">' + ic('cash', 'w-4 h-4') + '출금</button>'
        : '<button type="button" class="btn btn-outline btn-primary btn-sm"' + (partner ? '' : ' disabled') + ' title="입금(받은 돈) 입력" data-act="payOpen" data-kind="' + kind + '">' + ic('cash', 'w-4 h-4') + '입금</button>') +
      '<button type="button" class="btn btn-outline btn-success btn-sm"' + (partner || !isP ? '' : ' disabled') + ' data-act="demoOnly" data-what="엑셀">' + ic('download', 'w-4 h-4') + '엑셀</button>' +
      '<button type="button" class="btn btn-outline btn-info btn-sm"' + (selRow && partner ? '' : ' disabled') + ' title="' + (isP ? '행을 선택하세요' : '선택한 행으로 거래명세표 출력') + '" data-act="stmtOpen" data-kind="' + kind + '">' + ic('docText', 'w-4 h-4') + (isP ? '거래명세표' : '거래명세서') + '</button>' +
      '<button type="button" class="btn btn-outline ' + (isP ? 'btn-warning' : 'btn-error') + ' btn-sm"' + (isP ? '' : ' title="삭제된 전표 로그 조회"') + ' data-act="delLogOpen" data-kind="' + kind + '">' + ic('archive', 'w-4 h-4') + (isP ? '삭제로그' : '삭제 로그') + '</button>' +
      '<button type="button" class="btn btn-outline btn-accent btn-sm"' + (isP ? '' : ' title="멀티입출고 경로 설정"') + ' data-act="demoOnly" data-what="멀티입출고">' + ic('arrows', 'w-4 h-4') + '멀티입출고</button>' +
      '<button type="button" class="btn btn-ghost btn-sm" title="표 칼럼 너비를 기본값으로 초기화" data-act="demoOnly" data-what="칼럼너비 초기화">칼럼너비 초기화</button>'
    var fields =
      '<div><div class="text-xs text-base-content/60 mb-1">거래처</div><div class="relative"><div class="flex items-center gap-1"><div class="relative">' +
      ic('search', 'w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-base-content/40 pointer-events-none') +
      '<input class="input input-bordered input-sm w-48 pl-7" placeholder="거래처 검색(상호)" value="' + E(st.q) + '" data-input="slipQ" data-kind="' + kind + '" data-k="slipq-' + kind + '"></div>' +
      (partner ? '<button class="btn btn-ghost btn-xs btn-square" title="거래처 선택 해제" data-act="slipClear" data-kind="' + kind + '">' + ic('x', 'w-4 h-4') + '</button>' : '') +
      '</div>' + pickList + '</div></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">년월</div><input type="month" class="input input-bordered input-sm" value="' + E(st.ym) + '" data-change="slipYm" data-kind="' + kind + '"></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">일별 조회</div><div class="flex items-center gap-1"><input type="date" class="input input-bordered input-sm" value="' + E(st.day) + '" data-change="slipDay" data-kind="' + kind + '">' +
      '<button type="button" class="btn btn-outline btn-sm" title="일별조회 초기화 (이 달 전체 보기)"' + (st.day ? '' : ' disabled') + ' data-act="slipDayReset" data-kind="' + kind + '">초기화</button></div></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">기본 출고사업장</div><select class="select select-bordered select-sm ' + (isP ? 'w-40' : 'w-44') + '" data-change="slipSite" data-kind="' + kind + '">' + opts(sites.map(function (s) { return [s.id, s.name] }), st.site, '선택') + '</select></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">기본 출고창고</div><select class="select select-bordered select-sm ' + (isP ? 'w-28' : 'w-32') + '" data-change="slipWh" data-kind="' + kind + '">' + whOpts + '</select></div>'
    var left = isP
      ? '<div class="flex flex-wrap items-end gap-2 xl:flex-1 xl:min-w-0">' + fields + '<div class="flex flex-wrap items-center gap-2 w-full">' + btnRow + '</div></div>'
      : '<div class="flex flex-col gap-2 xl:flex-1 xl:min-w-0"><div class="flex flex-wrap items-end gap-2">' + fields + '</div><div class="flex flex-wrap items-center gap-2">' + btnRow + '</div></div>'

    var body
    if (!partner) {
      var quick = partners.filter(function (p) { return isP ? p.type !== '매출처' : p.type !== '매입처' })
      body = '<div class="border border-dashed border-base-300 rounded-lg py-16 text-center text-base-content/50">거래처를 선택하면 ' + L.t + '를 입력·조회할 수 있습니다.' +
        '<div class="flex flex-wrap justify-center gap-1 mt-4 px-4">' + quick.map(function (p) { return '<button class="btn btn-xs btn-ghost border border-base-300" data-act="slipPick" data-kind="' + kind + '" data-id="' + p.id + '">' + E(p.name) + '</button>' }).join('') + '</div></div>'
    } else {
      var defDate = st.day || (st.ym === YM ? TODAY : monthStart(st.ym))
      var entryP = st.entryP ? byId(products, st.entryP) : null
      var defPrice = entryP ? r100(entryP.price * (isP ? 0.6 : 0.74)) : ''
      body =
        '<form class="flex flex-wrap items-end gap-2 mb-2 p-3 bg-base-200 rounded-lg" data-submit="slipAdd" data-kind="' + kind + '">' +
        '<div><div class="text-xs text-base-content/60 mb-1">일자</div><input type="date" name="date" class="input input-bordered input-sm" value="' + E(defDate) + '"></div>' +
        '<div><div class="text-xs text-base-content/60 mb-1">창고</div><select name="wh" class="select select-bordered select-sm w-28">' + opts(warehouses.map(function (w) { return [w.id, w.name] }), st.wh || '1') + '</select></div>' +
        '<div><div class="text-xs text-base-content/60 mb-1">제품</div><select name="productId" class="select select-bordered select-sm w-72" data-change="slipEntryP" data-kind="' + kind + '">' +
        opts(products.filter(function (p) { return !p.hidden }).map(function (p) { return [p.id, p.brand + ' ' + p.name + ' ' + p.size] }), st.entryP, '제품 선택') + '</select></div>' +
        '<div><div class="text-xs text-base-content/60 mb-1">수량</div><input type="number" name="qty" min="1" value="4" class="input input-bordered input-sm w-20"></div>' +
        '<div><div class="text-xs text-base-content/60 mb-1">단가</div><input type="number" name="price" min="0" value="' + defPrice + '" class="input input-bordered input-sm w-28"></div>' +
        '<div><div class="text-xs text-base-content/60 mb-1">할인</div><input type="number" name="discount" min="0" value="0" class="input input-bordered input-sm w-24"></div>' +
        '<div><div class="text-xs text-base-content/60 mb-1">메모</div><input name="memo" class="input input-bordered input-sm w-40"></div>' +
        '<button class="btn btn-primary btn-sm">' + ic('plus', 'w-4 h-4') + '행 추가</button></form>' +
        '<div class="overflow-x-auto border border-base-200 rounded-lg"><table class="table table-sm w-full"><thead><tr class="bg-base-200">' +
        '<th class="w-8"></th><th>일자</th><th>창고</th><th>브랜드</th><th>제품명</th><th>사이즈</th><th class="text-right">수량</th><th class="text-right">단가</th><th class="text-right">공급가</th><th class="text-right">부가세</th><th class="text-right">할인</th><th class="text-right">합계금액</th><th>메모</th><th class="w-8"></th></tr></thead><tbody class="tabular-nums">' +
        (shown.length ? shown.map(function (s) {
          var p = byId(products, s.productId), a = slipAmt(s)
          return '<tr class="cursor-pointer hover' + (st.sel === s.id ? ' active' : '') + '" data-act="slipSel" data-kind="' + kind + '" data-id="' + s.id + '">' +
            '<td><button class="btn btn-ghost btn-xs btn-square" title="아래에 행 삽입" data-act="slipDup" data-kind="' + kind + '" data-id="' + s.id + '">+</button></td>' +
            '<td class="whitespace-nowrap">' + E(s.date) + '</td><td class="whitespace-nowrap">' + E(whName(s.wh)) + '</td><td>' + E(p ? p.brand : '') + '</td><td class="whitespace-nowrap">' + E(p ? p.name : '') + '</td><td>' + E(p ? p.size : '') + '</td>' +
            '<td class="text-right"><input type="number" min="1" class="input input-bordered input-xs w-16 text-right" value="' + s.qty + '" data-change="slipEdit" data-f="qty" data-kind="' + kind + '" data-id="' + s.id + '"></td>' +
            '<td class="text-right"><input type="number" min="0" class="input input-bordered input-xs w-24 text-right" value="' + s.price + '" data-change="slipEdit" data-f="price" data-kind="' + kind + '" data-id="' + s.id + '"></td>' +
            '<td class="text-right">' + N(a.supply) + '</td><td class="text-right">' + N(a.vat) + '</td><td class="text-right">' + N(a.discount) + '</td><td class="text-right font-semibold">' + N(a.total) + '</td><td class="text-xs">' + E(s.memo) + '</td>' +
            '<td><button class="btn btn-ghost btn-xs text-error" title="삭제" data-act="slipDel" data-kind="' + kind + '" data-id="' + s.id + '">' + ic('trash', 'w-3.5 h-3.5') + '</button></td></tr>'
        }).join('') : '<tr><td colspan="14" class="text-center py-10 text-base-content/50">' + (st.day ? E(st.day) + ' 내역이 없습니다.' : '이 달 전표가 없습니다. 위에서 행을 추가하세요.') + '</td></tr>') +
        '</tbody></table></div>'
    }
    return (
      '<div class="w-full max-w-[1900px] mx-auto p-4 sm:p-6"><div class="flex items-center gap-2 mb-3"><h1 class="text-2xl font-bold">' + L.t + '</h1>' +
      '<span class="text-sm text-base-content/50 flex items-center gap-1">' + ic('check', 'w-4 h-4 text-success') + '자동 저장됨</span>' +
      (partner ? '<span class="badge badge-outline">' + E(partner.name) + '</span>' : '') + '</div>' +
      '<div class="flex flex-col xl:flex-row xl:items-start gap-3 xl:gap-x-6 mb-3">' + left +
      '<div class="overflow-x-auto border border-base-200 rounded-lg w-full xl:w-auto shrink-0"><table class="table w-auto"><thead><tr class="bg-base-200"><th class="text-center">구분</th><th class="text-right">공급가</th><th class="text-right">부가세</th><th class="text-right">할인</th><th class="text-right">합계금액</th><th class="text-right">수량</th><th class="text-right">' + L.bal + '</th></tr></thead>' +
      '<tbody class="tabular-nums">' + sumRow('건', rKun, partner ? rest : 0) + sumRow('일 (' + md(dayKey) + ')', rDay) + sumRow('월', rMon) + sumRow('년', rYear) + '</tbody>' +
      '<tfoot><tr class="text-xs text-base-content/60"><td colspan="7" class="py-1 whitespace-nowrap">' + L.prev + ' ' + N(prev) + ' · ' + L.pay + ' ' + N(paid) + ' · ' + L.rest + ' ' + N(partner ? rest : 0) + '</td></tr></tfoot></table></div></div>' +
      body +
      '<div class="text-xs text-base-content/50 mt-2">입력하면 <b>자동 저장</b>됩니다(저장 버튼 없음). 마지막 행을 채우면 새 행이 자동으로 추가되고, 중간 삽입은 왼쪽 <b>+</b> 버튼을 씁니다. 행을 클릭하거나 위의 <b>일별 조회</b> 에 날짜를 넣으면 그 날짜 내역만 보이고 <b>일</b> 합계도 그 날짜 기준이 됩니다. <b>초기화</b> 를 누르면 이 달 전체가 보입니다.</div>' +
      (ui.modal && ui.modal.type === 'pay' ? payModal(kind) : '') + (ui.modal && ui.modal.type === 'stmt' ? stmtModal(kind) : '') + (ui.modal && ui.modal.type === 'delLog' ? delLogModal(kind) : '') +
      '</div>'
    )
  }
  var delLog = []
  function payModal(kind) {
    var st = ui.slip[kind], p = byId(partners, st.partnerId), isP = kind === 'purchase'
    return modal('<h3 class="font-bold text-lg mb-1">' + (isP ? '출금(준 돈) 입력' : '입금(받은 돈) 입력') + '</h3><p class="text-sm text-base-content/60 mb-4">' + E(p.name) + '</p>' +
      '<form data-submit="paySave" data-kind="' + kind + '"><div class="grid gap-3"><div><label class="label label-text text-xs">일자</label><input type="date" name="date" class="input input-bordered input-sm w-full" value="' + E(st.ym === YM ? TODAY : monthEnd(st.ym)) + '"></div>' +
      '<div><label class="label label-text text-xs">금액</label><input type="number" name="amount" min="0" step="1" class="input input-bordered input-sm w-full" value="500000"></div>' +
      '<div><label class="label label-text text-xs">메모</label><input name="memo" class="input input-bordered input-sm w-full" value="계좌이체"></div></div>' +
      '<div class="modal-action"><button type="button" class="btn btn-sm" data-act="closeModal">취소</button><button class="btn btn-primary btn-sm">저장</button></div></form>')
  }
  function stmtModal(kind) {
    var st = ui.slip[kind], s = byId(slips, st.sel), p = byId(partners, st.partnerId), pr = byId(products, s.productId), a = slipAmt(s)
    return modal('<h3 class="font-bold text-lg mb-4 text-center">거래명세표</h3><div class="text-sm mb-3"><div>공급받는자: <b>' + E(p.name) + '</b></div><div>공급자: (가상) 로드원 · 000-00-00000</div><div>일자: ' + E(s.date) + '</div></div>' +
      '<table class="table table-sm w-full border border-base-200"><thead><tr class="bg-base-200"><th>품목</th><th class="text-right">수량</th><th class="text-right">단가</th><th class="text-right">공급가</th><th class="text-right">부가세</th></tr></thead><tbody><tr><td>' + E(pLabel(pr)) + '</td><td class="text-right">' + s.qty + '</td><td class="text-right">' + N(s.price) + '</td><td class="text-right">' + N(a.supply) + '</td><td class="text-right">' + N(a.vat) + '</td></tr></tbody>' +
      '<tfoot><tr><td colspan="5" class="text-right font-semibold">합계 ' + N(a.total) + '원</td></tr></tfoot></table>' +
      '<div class="modal-action"><button class="btn btn-sm" data-act="closeModal">닫기</button><button class="btn btn-primary btn-sm" data-act="demoOnly" data-what="인쇄">인쇄</button></div>', 'max-w-2xl')
  }
  function delLogModal(kind) {
    var list = delLog.filter(function (x) { return x.kind === kind })
    return modal('<h3 class="font-bold text-lg mb-4">삭제 로그</h3>' +
      (list.length ? '<div class="overflow-x-auto"><table class="table table-sm w-full"><thead><tr><th>삭제 시각</th><th>거래처</th><th>일자</th><th>품목</th><th class="text-right">수량</th></tr></thead><tbody>' +
        list.map(function (x) { return '<tr><td>' + E(x.at) + '</td><td>' + E(x.partner) + '</td><td>' + E(x.date) + '</td><td>' + E(x.item) + '</td><td class="text-right">' + x.qty + '</td></tr>' }).join('') + '</tbody></table></div>'
        : '<p class="text-center py-8 text-base-content/50">삭제된 전표가 없습니다.</p>') +
      '<div class="modal-action"><button class="btn btn-sm" data-act="closeModal">닫기</button></div>', 'max-w-2xl')
  }
  function sk(el) { return el.dataset.kind }
  D.on('slipQ', function (v, el) { ui.slip[sk(el)].q = v; refresh() })
  D.on('slipPick', function (d) {
    var st = ui.slip[d.kind], p = byId(partners, d.id)
    st.partnerId = p.id; st.q = p.name; st.sel = null
    refresh()
  })
  D.on('slipClear', function (d) { var st = ui.slip[d.kind]; st.partnerId = null; st.q = ''; st.sel = null; refresh() })
  D.on('slipYm', function (v, el) { var st = ui.slip[sk(el)]; st.ym = v || YM; st.day = ''; st.sel = null; refresh() })
  D.on('slipDay', function (v, el) { var st = ui.slip[sk(el)]; st.day = v; if (v) st.ym = v.slice(0, 7); refresh() })
  D.on('slipDayReset', function (d) { ui.slip[d.kind].day = ''; refresh() })
  D.on('slipSite', function (v, el) {
    var st = ui.slip[sk(el)]
    st.site = v
    var s = byId(sites, v)
    if (s && s.whIds.length) st.wh = String(s.whIds[0])
    refresh()
  })
  D.on('slipWh', function (v, el) { ui.slip[sk(el)].wh = v; refresh() })
  D.on('slipEntryP', function (v, el) { ui.slip[sk(el)].entryP = v; refresh() })
  D.on('slipSel', function (d, el, e) {
    if (e.target.closest('input,button')) return
    var st = ui.slip[d.kind], s = byId(slips, d.id)
    st.sel = s.id; st.day = s.date
    refresh()
  })
  D.on('slipAdd', function (v, el) {
    var kind = el.dataset.kind, st = ui.slip[kind]
    var p = byId(products, v.productId)
    if (!p) return D.toast('제품을 선택하세요')
    var qty = Math.max(1, parseInt(v.qty, 10) || 0)
    var price = Math.max(0, parseInt(v.price, 10) || r100(p.price * (kind === 'purchase' ? 0.6 : 0.74)))
    var s = { id: sid++, kind: kind, partnerId: st.partnerId, date: v.date || TODAY, productId: p.id, qty: qty, price: price, discount: Math.max(0, parseInt(v.discount, 10) || 0), wh: +v.wh || 1, memo: v.memo || '' }
    slips.push(s)
    applyStock(s, 1)
    st.sel = s.id
    st.ym = s.date.slice(0, 7)
    if (st.day) st.day = s.date
    D.toast((kind === 'purchase' ? '매입' : '매출') + ' 전표 추가 · ' + whName(s.wh) + ' 재고 ' + (kind === 'purchase' ? '+' : '-') + qty)
    refresh()
  })
  D.on('slipDup', function (d) {
    var s = byId(slips, d.id)
    var c = JSON.parse(JSON.stringify(s))
    c.id = sid++
    slips.splice(slips.indexOf(s) + 1, 0, c)
    applyStock(c, 1)
    ui.slip[d.kind].sel = c.id
    refresh()
  })
  D.on('slipEdit', function (v, el) {
    var s = byId(slips, el.dataset.id), f = el.dataset.f
    var n = Math.max(f === 'qty' ? 1 : 0, parseInt(v, 10) || 0)
    if (f === 'qty') { applyStock(s, -1); s.qty = n; applyStock(s, 1) } else s.price = n
    ui.slip[el.dataset.kind].sel = s.id
    refresh()
  })
  D.on('slipDel', function (d) {
    var s = byId(slips, d.id)
    applyStock(s, -1)
    delLog.unshift({ kind: s.kind, at: TODAY + ' ' + new Date().toTimeString().slice(0, 5), partner: (byId(partners, s.partnerId) || {}).name, date: s.date, item: pLabel(byId(products, s.productId)), qty: s.qty })
    slips = slips.filter(function (x) { return x.id !== s.id })
    if (ui.slip[d.kind].sel === s.id) ui.slip[d.kind].sel = null
    D.toast('전표 행을 삭제했습니다 (삭제 로그에 기록)')
    refresh()
  })
  D.on('payOpen', function () { ui.modal = { type: 'pay' }; refresh() })
  D.on('stmtOpen', function () { ui.modal = { type: 'stmt' }; refresh() })
  D.on('delLogOpen', function () { ui.modal = { type: 'delLog' }; refresh() })
  D.on('paySave', function (v, el) {
    var kind = el.dataset.kind, st = ui.slip[kind]
    var amt = parseInt(v.amount, 10) || 0
    if (amt <= 0) return D.toast('금액을 입력하세요')
    payments.push({ id: paySeq++, date: v.date || TODAY, partnerId: st.partnerId, kind: kind === 'purchase' ? 'out' : 'in', amount: amt, memo: v.memo, writer: '(가상) 관리자' })
    ui.modal = null
    D.toast((kind === 'purchase' ? '출금 ' : '입금 ') + N(amt) + '원을 기록했습니다')
    refresh()
  })

  /* ───────── 매입매출조회 ───────── */
  function pageSlips() {
    var f = ui.sq
    var q = f.q.trim()
    var pickList = ''
    var chosen = f.partnerId ? byId(partners, f.partnerId) : null
    if (q && (!chosen || chosen.name !== q)) {
      var c = partners.filter(function (p) { return (p.name + p.abbr).indexOf(q) >= 0 })
      pickList = '<ul class="menu bg-base-100 rounded-lg shadow-lg border border-base-200 absolute left-0 top-full mt-1 w-64 " style="z-index:20">' +
        (c.length ? c.map(function (p) { return '<li><a data-act="sqPick" data-id="' + p.id + '">' + E(p.name) + '</a></li>' }).join('') : '<li class="text-xs text-base-content/50 p-2">검색 결과가 없습니다.</li>') + '</ul>'
    }
    var res = ''
    if (!f.done) {
      res = '<div class="border border-dashed border-base-300 rounded-lg py-16 text-center text-base-content/50">사업장, 거래처, 또는 창고를 선택한 후 조회 버튼을 클릭하세요.</div>'
    } else {
      var siteWh = f.site ? (byId(sites, f.site) || { whIds: [] }).whIds : null
      var list = slips.filter(function (s) {
        if (s.date.slice(0, 7) !== f.ym) return false
        if (f.kind !== 'all' && s.kind !== f.kind) return false
        if (f.partnerId && s.partnerId !== f.partnerId) return false
        if (f.wh && String(s.wh) !== f.wh) return false
        if (siteWh && siteWh.indexOf(s.wh) < 0) return false
        return true
      }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : a.id - b.id })
      var tp = sumSlips(list.filter(function (s) { return s.kind === 'purchase' })), ts = sumSlips(list.filter(function (s) { return s.kind === 'sales' }))
      res = '<div class="flex flex-wrap gap-2 mb-2 text-sm"><span class="badge badge-lg badge-outline">조회 ' + list.length + '건</span><span class="badge badge-lg badge-warning">매입 ' + N(tp.total) + '</span><span class="badge badge-lg badge-info">매출 ' + N(ts.total) + '</span></div>' +
        '<div class="overflow-x-auto border border-base-200 rounded-lg"><table class="table table-sm w-full"><thead><tr class="bg-base-200"><th>구분</th><th>일자</th><th>거래처</th><th>창고</th><th>브랜드</th><th>제품명</th><th>사이즈</th><th class="text-right">수량</th><th class="text-right">단가</th><th class="text-right">공급가</th><th class="text-right">부가세</th><th class="text-right">합계금액</th><th></th></tr></thead><tbody class="tabular-nums">' +
        (list.length ? list.map(function (s) {
          var p = byId(products, s.productId), pt = byId(partners, s.partnerId), a = slipAmt(s)
          return '<tr class="hover"><td><span class="badge badge-sm ' + (s.kind === 'purchase' ? 'badge-warning' : 'badge-info') + '">' + (s.kind === 'purchase' ? '매입' : '매출') + '</span></td><td class="whitespace-nowrap">' + E(s.date) + '</td><td class="whitespace-nowrap">' + E(pt ? pt.name : '-') + '</td><td>' + E(whName(s.wh)) + '</td><td>' + E(p ? p.brand : '') + '</td><td class="whitespace-nowrap">' + E(p ? p.name : '') + '</td><td>' + E(p ? p.size : '') + '</td>' +
            '<td class="text-right">' + s.qty + '</td><td class="text-right">' + N(s.price) + '</td><td class="text-right">' + N(a.supply) + '</td><td class="text-right">' + N(a.vat) + '</td><td class="text-right font-semibold">' + N(a.total) + '</td><td><button class="btn btn-ghost btn-xs" data-act="sqHist">이력</button></td></tr>'
        }).join('') : '<tr><td colspan="13" class="text-center py-10 text-base-content/50">조회 결과가 없습니다.</td></tr>') +
        '</tbody></table></div>'
    }
    return (
      '<div class="w-full max-w-[1900px] mx-auto p-4 sm:p-6"><h1 class="text-2xl font-bold mb-4">매입매출조회</h1>' +
      '<div class="flex flex-wrap items-end gap-3 mb-4 p-4 bg-base-200 rounded-lg">' +
      '<div><div class="text-xs text-base-content/60 mb-1">사업장</div><select class="select select-bordered select-sm w-44" data-change="sqSite">' + opts(sites.map(function (s) { return [s.id, s.name] }), f.site, '전체') + '</select></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">거래처</div><div class="relative"><div class="flex items-center gap-1"><div class="relative">' + ic('search', 'w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-base-content/40 pointer-events-none') +
      '<input class="input input-bordered input-sm w-48 pl-7" placeholder="거래처 검색(상호)" value="' + E(f.q) + '" data-input="sqQ" data-k="sqq"></div></div>' + pickList + '</div></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">창고</div><select class="select select-bordered select-sm w-36" data-change="sqWh">' + opts(warehouses.map(function (w) { return [w.id, w.name] }), f.wh, '전체') + '</select></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">년월</div><input type="month" class="input input-bordered input-sm" value="' + E(f.ym) + '" data-change="sqYm"></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">구분</div><div class="btn-group">' +
      [['all', '전체'], ['purchase', '매입'], ['sales', '매출']].map(function (k) { return '<button type="button" class="btn btn-sm ' + (f.kind === k[0] ? 'btn-primary' : 'btn-outline') + '" data-act="sqKind" data-k="' + k[0] + '">' + k[1] + '</button>' }).join('') + '</div></div>' +
      '<button type="button" class="btn btn-primary btn-sm" data-act="sqGo">' + ic('search', 'w-4 h-4') + '조회</button>' +
      '<button type="button" class="btn btn-outline btn-success btn-sm"' + (f.done ? '' : ' disabled') + ' data-act="demoOnly" data-what="엑셀">' + ic('download', 'w-4 h-4') + '엑셀</button></div>' +
      res +
      '<div class="text-xs text-base-content/50 mt-3">사업장, 거래처, 또는 창고를 선택하고 <b>조회</b> 버튼을 클릭하면 해당 조건의 매입/매출 전표를 한눈에 볼 수 있습니다. 상단의 <b>전체/매입/매출</b> 버튼으로 보고 싶은 전표 유형을 필터링할 수 있습니다.<b>이력</b> 버튼으로 수정 내역을 확인할 수 있습니다.</div></div>'
    )
  }
  D.on('sqSite', function (v) { ui.sq.site = v; refresh() })
  D.on('sqWh', function (v) { ui.sq.wh = v; refresh() })
  D.on('sqYm', function (v) { ui.sq.ym = v || YM; refresh() })
  D.on('sqQ', function (v) { ui.sq.q = v; if (!v) ui.sq.partnerId = null; refresh() })
  D.on('sqPick', function (d) { var p = byId(partners, d.id); ui.sq.partnerId = p.id; ui.sq.q = p.name; refresh() })
  D.on('sqKind', function (d) { ui.sq.kind = d.k; refresh() })
  D.on('sqGo', function () { ui.sq.done = true; refresh() })
  D.on('sqHist', function () { D.toast('수정 이력: 체험판 데이터는 최초 등록 상태입니다') })

  /* ───────── 입출금 조회 ───────── */
  function pagePayments() {
    var f = ui.pay, a = f.applied
    var list = payments.filter(function (x) {
      if (x.date < a.from || x.date > a.to) return false
      if (a.kind !== 'all' && x.kind !== a.kind) return false
      var p = byId(partners, x.partnerId)
      if (a.q && (!p || (p.name + p.abbr).indexOf(a.q) < 0)) return false
      return true
    }).sort(function (x, y) { return x.date < y.date ? 1 : -1 })
    var tin = list.filter(function (x) { return x.kind === 'in' }).reduce(function (s, x) { return s + x.amount }, 0)
    var tout = list.filter(function (x) { return x.kind === 'out' }).reduce(function (s, x) { return s + x.amount }, 0)
    var mbtn = function (m, l) { return '<button class="btn btn-sm join-item ' + (f.mode === m ? 'btn-primary' : 'btn-outline') + '" data-act="payMode" data-m="' + m + '">' + l + '</button>' }
    return (
      '<div class="w-full max-w-[1400px] mx-auto p-4 sm:p-6"><h1 class="text-2xl font-bold mb-3">입출금 조회</h1>' +
      '<form class="flex flex-wrap items-end gap-2 mb-3" data-submit="payGo"><div class="join">' + mbtn('month', '이번달') + mbtn('year', '올해') + mbtn('custom', '직접') + '</div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">시작일</div><input type="date" name="from" class="input input-bordered input-sm" value="' + E(f.from) + '" data-change="payFrom"></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">종료일</div><input type="date" name="to" class="input input-bordered input-sm" value="' + E(f.to) + '" data-change="payTo"></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">구분</div><select name="kind" class="select select-bordered select-sm">' + opts([['all', '전체'], ['in', '입금'], ['out', '출금']], f.kind) + '</select></div>' +
      '<div><div class="text-xs text-base-content/60 mb-1">거래처</div><input name="q" class="input input-bordered input-sm w-48" placeholder="거래처 검색" value="' + E(f.q) + '"></div>' +
      '<button class="btn btn-primary btn-sm">조회</button><div class="flex-1"></div>' +
      '<div class="flex gap-2 text-sm"><span class="badge badge-lg badge-success gap-1">입금 ' + N(tin) + '</span><span class="badge badge-lg badge-error gap-1">출금 ' + N(tout) + '</span><span class="badge badge-lg gap-1">차액 ' + N(tin - tout) + '</span></div></form>' +
      '<div class="overflow-x-auto border border-base-200 rounded-lg"><table class="table table-sm w-full"><thead><tr class="bg-base-200"><th class="w-28">일자</th><th>거래처</th><th class="w-20 text-center">구분</th><th class="w-32 text-right">금액</th><th>메모</th><th class="w-24">작성자</th></tr></thead><tbody class="tabular-nums">' +
      (list.length ? list.map(function (x) {
        var p = byId(partners, x.partnerId)
        return '<tr class="hover"><td>' + E(x.date) + '</td><td>' + E(p ? p.name : '(삭제된 거래처)') + '</td><td class="text-center"><span class="badge badge-sm ' + (x.kind === 'in' ? 'badge-success' : 'badge-error') + '">' + (x.kind === 'in' ? '입금' : '출금') + '</span></td><td class="text-right">' + N(x.amount) + '</td><td>' + E(x.memo) + '</td><td>' + E(x.writer) + '</td></tr>'
      }).join('') : '<tr><td colspan="6" class="text-center py-10 text-base-content/50">조회 결과가 없습니다.</td></tr>') +
      '</tbody></table></div><p class="text-xs text-base-content/50 mt-2">입금(받은 돈)·출금(준 돈)은 매입/매출 화면 하단에서 입력합니다. 여기서는 전체 거래처의 입출금을 기간·거래처로 조회만 합니다.</p></div>'
    )
  }
  D.on('payMode', function (d) {
    var f = ui.pay
    f.mode = d.m
    if (d.m === 'month') { f.from = monthStart(YM); f.to = monthEnd(YM) }
    if (d.m === 'year') { f.from = YEAR + '-01-01'; f.to = YEAR + '-12-31' }
    if (d.m !== 'custom') f.applied = { from: f.from, to: f.to, kind: f.applied.kind, q: f.applied.q }
    refresh()
  })
  D.on('payFrom', function (v) { ui.pay.from = v; ui.pay.mode = 'custom'; refresh() })
  D.on('payTo', function (v) { ui.pay.to = v; ui.pay.mode = 'custom'; refresh() })
  D.on('payGo', function (v) {
    var f = ui.pay
    f.from = v.from || f.from; f.to = v.to || f.to; f.kind = v.kind; f.q = (v.q || '').trim()
    f.applied = { from: f.from, to: f.to, kind: f.kind, q: f.q }
    refresh()
  })

  /* ───────── 회원 ───────── */
  function pageUsers() {
    var q = ui.users.q
    var list = users.filter(function (u) { return !q || u.name.indexOf(q) >= 0 }).slice().reverse()
    return (
      '<div class="container"><h1 class="text-3xl font-bold mb-2">회원 관리</h1><div class="text-right mb-4"><form data-submit="userSearch">' +
      '<input type="text" placeholder="사업자명" class="input input-bordered w-full max-w-xs mr-2" name="businessName" value="' + E(q) + '">' +
      '<input type="submit" class="btn btn-primary" value="검색"></form></div>' +
      '<div class="overflow-x-auto"><table class="table w-full min-w-[800px]"><thead><tr><th>아이디</th><th>사업자명</th><th>소속 사업장</th><th>담당자 휴대폰 번호</th><th>이메일</th><th>More</th></tr></thead><tbody>' +
      (list.length ? list.map(function (u) {
        var s = u.siteId ? byId(sites, u.siteId) : null
        return '<tr class=""><td class="font-mono">' + E(u.uid) + (u.master ? '<span class="badge badge-primary badge-sm ml-1">마스터</span>' : '') + '</td><td>' + E(u.name) + '</td><td>' +
          (s ? E(s.name) : '<span class="text-xs text-base-content/40">미지정</span>') + '</td><td>' + E(u.phone) + '</td><td>' + E(u.email) + '</td><td><a href="#/manage/users/' + u.id + '"><button class="btn btn-sm">상세보기</button></a></td></tr>'
      }).join('') : '<tr><td colspan="6" class="text-center py-10 text-base-content/50">검색 결과가 없습니다.</td></tr>') +
      '</tbody></table></div></div>'
    )
  }
  D.on('userSearch', function (v) { ui.users.q = (v.businessName || '').trim(); refresh() })
  function userForm(u, isNew) {
    var f = function (k, l, ph, type) { return '<div><label class="label label-text text-sm">' + l + '</label><input name="' + k + '" type="' + (type || 'text') + '" class="input input-bordered w-full" value="' + E(u[k] || '') + '"' + (ph ? ' placeholder="' + ph + '"' : '') + '></div>' }
    return (
      '<div class="container max-w-2xl"><h1 class="text-3xl font-bold mb-6">' + (isNew ? '회원 등록' : '회원 상세') + '</h1>' +
      '<form class="grid gap-3" data-submit="' + (isNew ? 'userCreate' : 'userSave') + '"' + (isNew ? '' : ' data-id="' + u.id + '"') + '>' +
      f('uid', '아이디 *', '영문/숫자') + f('name', '사업자명 *', '(가상) 상호') + f('owner', '담당자명') + f('phone', '담당자 휴대폰 번호', '010-0000-0000') + f('email', '이메일', 'name@example.com', 'email') + f('addr', '사업장 주소') +
      '<div class="grid grid-cols-2 gap-3"><div><label class="label label-text text-sm">소속 사업장</label><select name="siteId" class="select select-bordered w-full">' + opts(sites.map(function (s) { return [s.id, s.name] }), u.siteId || '', '미지정') + '</select></div>' +
      '<div><label class="label label-text text-sm">역할</label><select name="roleId" class="select select-bordered w-full">' + opts(roles.map(function (r) { return [r.id, r.name] }), u.roleId || '', '역할 없음') + '</select></div></div>' +
      '<div class="flex gap-2 mt-4"><a class="btn" href="#/manage/users">목록</a><div class="flex-1"></div>' +
      (isNew ? '' : (u.master ? '' : '<button type="button" class="btn btn-outline btn-error" data-act="userDel" data-id="' + u.id + '">' + ic('trash', 'w-4 h-4') + '삭제</button>')) +
      '<button class="btn btn-primary">' + (isNew ? '등록' : '저장') + '</button></div></form></div>'
    )
  }
  function readUser(u, v) {
    u.uid = v.uid.trim(); u.name = v.name.trim(); u.owner = v.owner; u.phone = v.phone; u.email = v.email; u.addr = v.addr
    u.siteId = v.siteId ? +v.siteId : null; u.roleId = v.roleId ? +v.roleId : null
  }
  D.on('userCreate', function (v) {
    if (!v.uid.trim() || !v.name.trim()) return D.toast('아이디와 사업자명을 입력하세요')
    var u = { id: nextId(users), master: false }
    readUser(u, v)
    users.push(u)
    D.toast('회원을 등록했습니다')
    D.go('/manage/users')
  })
  D.on('userSave', function (v, el) {
    if (!v.uid.trim() || !v.name.trim()) return D.toast('아이디와 사업자명을 입력하세요')
    readUser(byId(users, el.dataset.id), v)
    D.toast('회원 정보를 저장했습니다')
    D.go('/manage/users')
  })
  D.on('userDel', function (d) {
    users = users.filter(function (u) { return u.id !== +d.id })
    D.toast('회원을 삭제했습니다')
    D.go('/manage/users')
  })

  /* ───────── 역할 ───────── */
  function pageRoles() {
    return (
      '<div class="max-w-5xl mx-auto p-4 sm:p-6"><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold">역할 관리</h1>' +
      '<a class="btn btn-primary btn-sm" href="#/manage/roles/new">' + ic('plus', 'w-4 h-4') + '새 역할</a></div><div class="space-y-3">' +
      (roles.length ? roles.map(function (r) {
        var n = users.filter(function (u) { return u.roleId === r.id }).length
        return '<div class="card card-compact bg-base-100 shadow-sm border border-base-200"><div class="card-body"><div class="flex items-start justify-between gap-4"><div class="flex-1 min-w-0">' +
          '<h2 class="font-semibold text-base">' + E(r.name) + '</h2><div class="flex flex-wrap gap-1 mt-2">' + r.perms.map(function (p) { return '<span class="badge badge-outline badge-sm">' + E(p) + '</span>' }).join('') + '</div>' +
          '<p class="text-xs text-base-content/50 mt-2">소속 사용자 ' + n + '명</p></div><div class="flex gap-1 shrink-0">' +
          '<a class="btn btn-ghost btn-sm btn-square" href="#/manage/roles/' + r.id + '/edit" aria-label="수정">' + ic('edit', 'w-4 h-4') + '</a>' +
          '<button class="btn btn-ghost btn-sm btn-square text-error" data-act="roleDel" data-id="' + r.id + '" aria-label="삭제">' + ic('trash', 'w-4 h-4') + '</button></div></div></div></div>'
      }).join('') : '<div class="text-center py-12 text-base-content/50 border rounded">등록된 역할이 없습니다.</div>') +
      '</div></div>'
    )
  }
  function roleForm(r) {
    var isNew = !r.id
    return (
      '<div class="max-w-5xl mx-auto p-4 sm:p-6"><h1 class="text-xl font-bold mb-6">' + (isNew ? '새 역할' : '역할 수정') + '</h1><form class="grid gap-4" data-submit="roleSave"' + (isNew ? '' : ' data-id="' + r.id + '"') + '>' +
      '<div><label class="label label-text text-sm">역할 이름</label><input name="name" class="input input-bordered w-full max-w-md" value="' + E(r.name || '') + '" placeholder="예: 재고 담당"></div>' +
      '<div><label class="label label-text text-sm">권한</label><div class="grid sm:grid-cols-2 gap-2">' +
      PERMS.map(function (p, i) { return '<label class="flex items-center gap-2 text-sm cursor-pointer border border-base-200 rounded-lg p-2"><input type="checkbox" class="checkbox checkbox-sm" name="perm' + i + '"' + ((r.perms || []).indexOf(p) >= 0 ? ' checked' : '') + '>' + E(p) + '</label>' }).join('') +
      '</div></div><div class="flex gap-2"><a class="btn btn-sm" href="#/manage/roles">취소</a><button class="btn btn-primary btn-sm">저장</button></div></form></div>'
    )
  }
  D.on('roleSave', function (v, el) {
    if (!(v.name || '').trim()) return D.toast('역할 이름을 입력하세요')
    var perms = PERMS.filter(function (p, i) { return v['perm' + i] })
    if (el.dataset.id) { var r = byId(roles, el.dataset.id); r.name = v.name.trim(); r.perms = perms }
    else roles.push({ id: nextId(roles), name: v.name.trim(), perms: perms })
    D.toast('역할을 저장했습니다')
    D.go('/manage/roles')
  })
  D.on('roleDel', function (d) {
    roles = roles.filter(function (r) { return r.id !== +d.id })
    users.forEach(function (u) { if (u.roleId === +d.id) u.roleId = null })
    D.toast('역할을 삭제했습니다')
    refresh()
  })

  /* ───────── 주문 관리 ───────── */
  function orderAmount(o) { return o.items.reduce(function (s, it) { var p = byId(products, it.productId); return s + (p ? r100(p.price * 0.74) * it.qty : 0) }, 0) }
  function pageOrder() {
    var f = ui.order
    var list = orders.filter(function (o) { return (f.status === '0' || String(o.status) === f.status) && o.date.slice(0, 7) === f.ym })
    var badge = { 1: 'badge-warning', 3: 'badge-info', 4: 'badge-success' }
    var m = ui.modal
    var mo = m && m.order ? byId(orders, m.order) : null
    var mu = mo ? byId(users, mo.userId) : null
    return (
      '<div class="container"><h1 class="text-lg sm:text-2xl font-bold mb-3 sm:mb-6">관리자 주문 관리</h1><div>' +
      '<div class="mb-4 flex gap-4"><div><h6 class="mb-2">주문 상태</h6><select class="select select-bordered w-full max-w-xs select-xs md:select-md" style="min-width:6rem" data-change="orderStatus">' +
      opts([['0', '전체'], ['1', '주문 확인중'], ['3', '배송중'], ['4', '배송완료']], f.status) + '</select></div>' +
      '<div><h6 class="mb-2">기간</h6><div class="flex gap-2"><input type="month" class="input input-bordered w-full input-xs md:input-md" value="' + E(f.ym) + '" data-change="orderYm"></div></div></div>' +
      '<div>' +
      (list.length ? '<div class="overflow-x-auto"><table class="table w-full"><thead><tr><th>주문일시</th><th>주문자</th><th>주문 상품</th><th class="text-right">금액</th><th>상태</th><th>배송 정보</th><th class="text-right">처리</th></tr></thead><tbody>' +
        list.map(function (o) {
          var u = byId(users, o.userId)
          return '<tr class="hover"><td class="whitespace-nowrap">' + E(o.date) + '</td><td class="whitespace-nowrap">' + E(u ? u.name : '(탈퇴 회원)') + '</td><td>' +
            o.items.map(function (it) { return '<div class="whitespace-nowrap">' + E(pLabel(byId(products, it.productId))) + ' × ' + it.qty + '</div>' }).join('') + '</td>' +
            '<td class="text-right">' + N(orderAmount(o)) + '</td><td><span class="badge badge-sm ' + badge[o.status] + '">' + ORDER_STATUS[o.status] + '</span></td><td class="text-sm">' + E(o.ship) + '</td>' +
            '<td class="text-right whitespace-nowrap">' +
            (o.status === 1 ? '<button class="btn btn-primary btn-xs" data-act="orderModal" data-t="accept" data-id="' + o.id + '">접수</button> ' : '') +
            (o.status === 3 ? '<button class="btn btn-primary btn-xs" data-act="orderModal" data-t="done" data-id="' + o.id + '">배송완료</button> ' : '') +
            '<button class="btn btn-ghost btn-xs text-error" data-act="orderModal" data-t="del" data-id="' + o.id + '">삭제</button></td></tr>'
        }).join('') + '</tbody></table></div>'
        : '<div class="text-center py-12 text-base-content/50">해당 기간의 주문이 없습니다.</div>') +
      '</div>' +
      (m && m.type === 'order' && m.t === 'del' ? '<dialog class="modal" open><div class="modal-box text-center"><h3 class="font-bold text-lg">주문 삭제</h3><p class="py-4">정보를 삭제하면 복구할 수 없습니다.<br>삭제를 진행하시겠습니까?</p><div class="modal-action w-full"><button class="btn flex-1" data-act="closeModal">취소</button><button class="btn flex-1 btn-primary" data-act="orderDel">확인</button></div></div></dialog>' : '') +
      (m && m.type === 'order' && m.t === 'accept' ? '<dialog class="modal" open><div class="modal-box max-w-none"><h3 class="font-bold text-lg mb-2">주문 접수</h3><h4 class="text-sm text-neutral-400">' + E(mu ? mu.name : '(탈퇴 회원)') + ' ' + E(mo.date) + '</h4>' +
        '<div class="overflow-scroll"><table class="table table-sm w-full"><thead><tr><th>브랜드</th><th>제품명</th><th>사이즈</th><th class="text-right">수량</th><th class="text-right">현재 재고</th></tr></thead><tbody>' +
        mo.items.map(function (it) { var p = byId(products, it.productId); return '<tr><td>' + E(p ? p.brand : '') + '</td><td>' + E(p ? p.name : '') + '</td><td>' + E(p ? p.size : '') + '</td><td class="text-right">' + it.qty + '</td><td class="text-right">' + (p ? N(stockOf(p, warehouses)) : '-') + '</td></tr>' }).join('') +
        '</tbody></table></div><form class="modal-action w-full flex flex-col" data-submit="orderAccept"><div class="mb-4"><span>배송 정보: </span><input type="text" name="ship" class="input input-bordered w-56" placeholder="배송 정보 입력" value=""></div>' +
        '<div class="flex gap-4"><button type="button" class="btn flex-1" data-act="closeModal">닫기</button><button class="btn flex-1 btn-primary">접수</button></div></form></div></dialog>' : '') +
      (m && m.type === 'order' && m.t === 'done' ? '<dialog class="modal" open><div class="modal-box text-center"><h3 class="font-bold text-lg">배송 완료</h3><p class="py-4">해당 주문을 배송완료 처리하시겠습니까?</p><div class="modal-action w-full"><button class="btn flex-1" data-act="closeModal">취소</button><button class="btn flex-1 btn-primary" data-act="orderDone">확인</button></div></div></dialog>' : '') +
      '</div></div>'
    )
  }
  D.on('orderStatus', function (v) { ui.order.status = v; refresh() })
  D.on('orderYm', function (v) { ui.order.ym = v || YM; refresh() })
  D.on('orderModal', function (d) { ui.modal = { type: 'order', t: d.t, order: +d.id }; refresh() })
  D.on('orderAccept', function (v) {
    var o = byId(orders, ui.modal.order)
    o.status = 3; o.ship = (v.ship || '').trim() || '택배 발송'
    // 접수 시 본사창고 기준으로 출고(재고 차감)
    o.items.forEach(function (it) { var p = byId(products, it.productId); if (p) p.stock[1] = Math.max(0, (p.stock[1] || 0) - it.qty) })
    ui.modal = null
    D.toast('주문을 접수했습니다, 배송중 · 본사창고 재고 차감')
    refresh()
  })
  D.on('orderDone', function () { byId(orders, ui.modal.order).status = 4; ui.modal = null; D.toast('배송완료 처리했습니다'); refresh() })
  D.on('orderDel', function () { orders = orders.filter(function (o) { return o.id !== ui.modal.order }); ui.modal = null; D.toast('주문을 삭제했습니다'); refresh() })

  /* ───────── 상품 관리 ───────── */
  var PAGE = 50
  function prodFiltered() {
    var f = ui.prod
    var sd = sizeDigits(f.size)
    return products.filter(function (p) {
      if (f.vis === 'visible' && p.hidden) return false
      if (f.vis === 'hidden' && !p.hidden) return false
      if (f.brand && p.brand !== f.brand) return false
      if (f.name && (p.name + ' ' + p.alias).toLowerCase().indexOf(f.name.toLowerCase()) < 0) return false
      if (sd && sizeDigits(p.size).indexOf(sd) !== 0) return false
      if (f.code && p.code.toLowerCase().indexOf(f.code.toLowerCase()) < 0) return false
      return true
    })
  }
  function prodModal() {
    var isNew = !ui.modal.id
    var p = isNew ? { brand: '', code: '', name: '', size: '', ssli: '', marking: '', origin: '', etc: '', price: '', season: '', special: '', alias: '', prev: [], memo: '' } : byId(products, ui.modal.id)
    var inp = function (k, l, ph) { return '<div><label class="label label-text text-xs">' + l + '</label><input type="text" name="' + k + '" class="input input-bordered input-sm w-full" value="' + E(p[k]) + '"' + (ph ? ' placeholder="' + ph + '"' : '') + '></div>' }
    return '<dialog class="modal" open><div class="modal-box"><h3 class="font-bold text-lg mb-4">' + (isNew ? '새 제품 추가' : '제품 수정') + '</h3><form data-submit="prodSave"><div class="grid gap-3">' +
      '<div><label class="label label-text text-xs">브랜드</label><select name="brand" class="select select-bordered select-sm w-full">' + brandOpts(p.brand, '선택') + '</select></div>' +
      inp('code', '제품코드 *') + inp('name', '제품명') +
      '<div class="grid grid-cols-3 gap-2">' + inp('size', '사이즈', '225/45R17') + inp('ssli', 'SS/LI') + inp('marking', '마킹') + '</div>' +
      '<div class="grid grid-cols-3 gap-2">' + inp('origin', '원산지') + inp('etc', '기타') + '<div><label class="label label-text text-xs">공장도가</label><input type="text" name="price" class="input input-bordered input-sm w-full" placeholder="숫자" value="' + E(p.price) + '"></div></div>' +
      '<div class="grid grid-cols-2 gap-2"><div><label class="label label-text text-xs">계절 구분</label><select name="season" class="select select-bordered select-sm w-full">' + opts([['all-weathers', '사계절'], ['winter', '겨울'], ['summer', '여름']], p.season, '선택') + '</select></div>' +
      '<div><label class="label label-text text-xs">특수</label><input type="text" name="special" class="input input-bordered input-sm w-full" placeholder="특수 정보 입력" value="' + E(p.special) + '"></div></div>' +
      '<div><label class="label label-text text-xs">추가 검색어 (별칭·차종 등)</label><input type="text" name="alias" class="input input-bordered input-sm w-full" placeholder="쉼표로 구분 (예: PS4, 피제로, 벤츠, 순정)" value="' + E(p.alias) + '">' +
      '<p class="text-xs text-base-content/40 mt-1">패턴 별칭·약어·차종 등 보조 검색어. 사이즈는 자동으로 처리되므로 여기에 적지 않아도 됩니다.</p></div>' +
      '<div><div class="flex items-center justify-between mb-1"><label class="label label-text text-xs">이전공가</label><button type="button" class="btn btn-xs btn-ghost text-primary" data-act="demoOnly" data-what="이전공가 추가">' + ic('plus', 'w-3.5 h-3.5') + ' 추가</button></div>' +
      (p.prev.length ? p.prev.map(function (x) { return '<p class="text-xs">' + E(x.label) + ' ' + N(x.price) + '</p>' }).join('') : '<p class="text-xs text-base-content/40">이전공가가 없습니다.</p>') + '</div>' +
      '<div><label class="label label-text text-xs">메모</label><textarea name="memo" class="textarea textarea-bordered textarea-sm w-full" rows="3" placeholder="메모를 입력하세요...">' + E(p.memo) + '</textarea></div>' +
      '</div><div class="modal-action"><button type="button" class="btn btn-sm" data-act="closeModal">취소</button><button class="btn btn-primary btn-sm ">' + (isNew ? '추가' : '저장') + '</button></div></form></div>' +
      '<form class="modal-backdrop" method="dialog"><button data-act="closeModal">close</button></form></dialog>'
  }
  function pageProduct() {
    var f = ui.prod
    var whs = sheetWh(f.sheet)
    var list = prodFiltered().slice().sort(function (a, b) { return stockOf(b, whs) - stockOf(a, whs) })
    var pages = Math.max(1, Math.ceil(list.length / PAGE))
    if (f.page > pages) f.page = pages
    var from = (f.page - 1) * PAGE
    var rows = list.slice(from, from + PAGE)
    var clr = function (k) { return '<button type="button" class="btn btn-ghost btn-xs btn-square absolute right-1 top-1/2 -translate-y-1/2' + (f[k] ? '' : ' invisible pointer-events-none') + '" title="검색 초기화" data-act="prodClear" data-k="' + k + '">' + ic('x', 'w-4 h-4') + '</button>' }
    var radio = function (v, l) { return '<input class="join-item btn btn-sm" type="radio" aria-label="' + l + '" name="visibilityFilter" value="' + v + '" data-change="prodVis"' + (f.vis === v ? ' checked' : '') + '>' }
    return (
      '<div class="w-full px-4 py-4"><div class="flex flex-wrap gap-2 items-center justify-between mb-1"><div class="flex items-center gap-3 flex-wrap"><h1 class="text-2xl font-bold">상품 관리</h1>' +
      '<div class="flex items-center gap-2"><label class="text-sm font-medium text-base-content/70">재고표</label><select class="select select-bordered select-sm" data-change="prodSheet">' +
      opts([['__ALL__', '전체 (모든 재고표 합산)']].concat(sheets.map(function (s) { return [s.id, s.name] })), f.sheet) + '</select></div></div>' +
      '<div class="flex flex-wrap gap-2 items-center"><button class="btn btn-sm btn-ghost" title="선택 삭제" data-act="prodDelChecked">' + ic('trash', 'w-4 h-4') + '</button>' +
      '<div class="join">' + radio('all', '전체') + radio('visible', '숨김 제외') + radio('hidden', '숨김만') + '</div>' +
      '<button class="btn btn-ghost btn-sm" title="새로고침" data-act="prodReload">' + ic('refresh', 'w-4 h-4') + '</button>' +
      '<button class="btn btn-ghost btn-sm" title="엑셀 다운로드" data-act="demoOnly" data-what="엑셀 다운로드">' + ic('download', 'w-4 h-4') + '다운로드</button>' +
      '<button class="btn btn-ghost btn-sm " title="엑셀 업로드" data-act="demoOnly" data-what="엑셀 업로드">' + ic('upload', 'w-4 h-4') + '업로드</button>' +
      '<button class="btn btn-primary btn-sm" data-act="prodAdd">' + ic('plus', 'w-4 h-4') + '제품 추가</button></div></div>' +
      '<p class="text-xs text-base-content/60 mb-3">※ 총재고는 선택된 재고표 기준 합산입니다.</p>' +
      '<div class="flex gap-3 mb-3 flex-wrap items-end">' +
      '<div><label class="text-xs font-medium text-base-content/60 mb-1 block">브랜드</label><select class="select select-bordered select-sm w-32" data-change="prodBrand">' + brandOpts(f.brand, '전체') + '</select></div>' +
      '<div class="relative"><label class="text-xs font-medium text-base-content/60 mb-1 block">제품명</label><div class="relative"><input type="text" class="input input-bordered input-sm w-44 pr-8" placeholder="검색 또는 선택..." value="' + E(f.name) + '" data-input="prodF" data-f="name" data-k="pf-name">' + clr('name') + '</div></div>' +
      '<div><label class="text-xs font-medium text-base-content/60 mb-1 block">사이즈(숫자)</label><div class="relative"><input type="text" class="input input-bordered input-sm w-28 pr-8" placeholder="예: 2254517" value="' + E(f.size) + '" data-input="prodF" data-f="size" data-k="pf-size">' + clr('size') + '</div></div>' +
      '<div><label class="text-xs font-medium text-base-content/60 mb-1 block">제품코드</label><div class="relative"><input type="text" class="input input-bordered input-sm w-36 pr-8" placeholder="부분 검색" value="' + E(f.code) + '" data-input="prodF" data-f="code" data-k="pf-code">' + clr('code') + '</div></div>' +
      '<button class="btn btn-sm btn-ghost" data-act="prodReload">' + ic('search', 'w-4 h-4') + ' 검색</button>' +
      '<span class="text-xs text-base-content/40 self-end">총 ' + list.length + '개</span></div>' +
      '<div class="overflow-x-auto border border-base-300 rounded-lg"><table class="table table-sm"><thead><tr class="bg-base-200">' +
      '<th class="w-8"><input class="checkbox checkbox-xs" type="checkbox" data-change="prodCheckAll"' + (rows.length && rows.every(function (p) { return f.checked[p.id] }) ? ' checked' : '') + '></th><th class="w-10">#</th><th>브랜드</th><th>제품명</th><th>제품코드</th><th>사이즈</th><th>추가 검색어</th><th>SS/LI</th><th>마킹</th><th>원산지</th><th>특수</th><th>기타</th><th>계절</th><th>공장도가</th><th>이전공가(들)</th><th>메모</th><th>총재고</th><th class="w-20">관리</th></tr></thead><tbody>' +
      (rows.length ? rows.map(function (p, i) {
        return '<tr class="hover ' + (p.hidden ? 'opacity-50' : '') + '"><td><input class="checkbox checkbox-xs" type="checkbox" data-change="prodCheck" data-id="' + p.id + '"' + (f.checked[p.id] ? ' checked' : '') + '></td>' +
          '<td class="text-base-content/40">' + (from + i + 1) + '</td><td>' + E(p.brand) + '</td><td>' + E(p.name) + '</td><td class="font-mono text-xs">' + E(p.code) + '</td><td>' + E(p.size) + '</td><td class="text-xs">' + E(sizeDigits(p.size) + (p.alias ? ', ' + p.alias : '')) + '</td>' +
          '<td>' + E(p.ssli) + '</td><td>' + E(p.marking) + '</td><td>' + E(p.origin) + '</td><td>' + E(p.special) + '</td><td>' + E(p.etc) + '</td><td>' + E(SEASON[p.season] || '') + '</td><td class="text-right">' + N(p.price) + '</td>' +
          '<td class="text-right text-xs">' + p.prev.map(function (x) { return '<div>' + E(x.label) + ' ' + N(x.price) + '</div>' }).join('') + '</td>' +
          '<td class="max-w-[200px] truncate text-xs text-base-content/70" title="' + E(p.memo) + '">' + E(p.memo) + '</td><td class="text-center font-semibold text-blue-600">' + stockOf(p, whs) + '</td>' +
          '<td><div class="flex gap-1"><button class="btn btn-ghost btn-xs" title="수정" data-act="prodEdit" data-id="' + p.id + '">' + ic('edit', 'w-3.5 h-3.5') + '</button>' +
          '<button class="btn btn-ghost btn-xs ' + (p.hidden ? 'text-warning' : '') + '" title="' + (p.hidden ? '숨김 해제' : '숨김') + '" data-act="prodHide" data-id="' + p.id + '">' + ic('eyeSlash', 'w-3.5 h-3.5') + '</button>' +
          '<button class="btn btn-ghost btn-xs text-error" title="삭제" data-act="prodDel" data-id="' + p.id + '">' + ic('trash', 'w-3.5 h-3.5') + '</button></div></td></tr>'
      }).join('') : '<tr><td colspan="18" class="text-center py-10 text-base-content/50">조건에 맞는 제품이 없습니다.</td></tr>') +
      '</tbody></table></div>' +
      '<div class="flex items-center justify-center gap-2 mt-3"><button class="btn btn-ghost btn-sm"' + (f.page <= 1 ? ' disabled' : '') + ' data-act="prodPage" data-d="-1" aria-label="이전">' + ic('chevL', 'w-4 h-4') + '</button>' +
      '<span class="text-sm">' + f.page + ' / ' + pages + '</span><button class="btn btn-ghost btn-sm"' + (f.page >= pages ? ' disabled' : '') + ' data-act="prodPage" data-d="1" aria-label="다음">' + ic('chevR', 'w-4 h-4') + '</button>' +
      '<span class="text-xs text-base-content/40 ml-2">(' + (list.length ? from + 1 : 0) + '-' + Math.min(from + PAGE, list.length) + ' / ' + list.length + ')</span></div>' +
      (ui.modal && ui.modal.type === 'prod' ? prodModal() : '') + '</div>'
    )
  }
  D.on('prodSheet', function (v) { ui.prod.sheet = v === '__ALL__' ? v : +v; refresh() })
  D.on('prodVis', function (v) { ui.prod.vis = v; ui.prod.page = 1; refresh() })
  D.on('prodBrand', function (v) { ui.prod.brand = v; ui.prod.page = 1; refresh() })
  D.on('prodF', function (v, el) { ui.prod[el.dataset.f] = v; ui.prod.page = 1; refresh() })
  D.on('prodClear', function (d) { ui.prod[d.k] = ''; refresh() })
  D.on('prodReload', function () { refresh(); D.toast('목록을 새로 불러왔습니다') })
  D.on('prodPage', function (d) { ui.prod.page += +d.d; refresh(); window.scrollTo(0, 0) })
  D.on('prodCheck', function (v, el) { ui.prod.checked[el.dataset.id] = el.checked })
  D.on('prodCheckAll', function (v, el) {
    var f = ui.prod, whs = sheetWh(f.sheet)
    prodFiltered().sort(function (a, b) { return stockOf(b, whs) - stockOf(a, whs) }).slice((f.page - 1) * PAGE, f.page * PAGE).forEach(function (p) { f.checked[p.id] = el.checked })
    refresh()
  })
  D.on('prodDelChecked', function () {
    var ids = Object.keys(ui.prod.checked).filter(function (k) { return ui.prod.checked[k] }).map(Number)
    if (!ids.length) return D.toast('삭제할 제품을 체크하세요')
    products = products.filter(function (p) { return ids.indexOf(p.id) < 0 })
    ui.prod.checked = {}
    D.toast(ids.length + '개 제품을 삭제했습니다')
    refresh()
  })
  D.on('prodAdd', function () { ui.modal = { type: 'prod', id: null }; refresh() })
  D.on('prodEdit', function (d) { ui.modal = { type: 'prod', id: +d.id }; refresh() })
  D.on('prodHide', function (d) { var p = byId(products, d.id); p.hidden = !p.hidden; D.toast(p.hidden ? '숨김 처리했습니다' : '숨김을 해제했습니다'); refresh() })
  D.on('prodDel', function (d) { products = products.filter(function (p) { return p.id !== +d.id }); D.toast('제품을 삭제했습니다'); refresh() })
  D.on('prodSave', function (v) {
    if (!v.code.trim()) return D.toast('제품코드를 입력하세요')
    var isNew = !ui.modal.id
    var p = isNew ? { id: nextId(products), prev: [], hidden: false, stock: {} } : byId(products, ui.modal.id)
    ;['brand', 'code', 'name', 'size', 'ssli', 'marking', 'origin', 'etc', 'season', 'special', 'alias', 'memo'].forEach(function (k) { p[k] = (v[k] || '').trim() })
    p.price = parseInt(String(v.price).replace(/\D/g, ''), 10) || 0
    if (isNew) { warehouses.forEach(function (w) { p.stock[w.id] = 0 }); products.unshift(p); ui.prod.page = 1 }
    ui.modal = null
    D.toast(isNew ? '제품을 추가했습니다, 재고 관리에서 수량을 입력하세요' : '제품을 수정했습니다')
    refresh()
  })

  /* ───────── 재고 관리 스프레드시트 ───────── */
  function cellCls(n) { return n > 0 ? 'text-blue-600 font-semibold' : 'text-base-content/30' }
  function pageSpreadsheet() {
    var f = ui.ss
    var sh = byId(sheets, f.sheet) || sheets[0]
    if (sh) f.sheet = sh.id
    var whs = sh ? sheetWh(sh.id) : []
    var th = 'border border-base-300 px-4 py-3 text-center font-semibold bg-green-50 whitespace-nowrap'
    var head = '<tr class="bg-base-200"><th class="border border-base-300 px-4 py-3 text-left font-bold whitespace-nowrap sticky left-0 bg-base-200" style="z-index: 11; min-width: 120px;">' + (f.brand ? '제품명 / 사이즈' : '브랜드') + '</th>' +
      '<th class="border border-base-300 px-4 py-3 text-center font-bold bg-blue-100 whitespace-nowrap" style="min-width: 100px;">토탈</th>' +
      whs.map(function (w) { return '<th class="' + th + '" style="min-width: 100px;">' + E(w.name) + '</th>' }).join('') + '</tr>'
    var td = 'border border-base-300 px-4 py-2.5 text-center whitespace-nowrap '
    var rowsHtml = ''
    var colTot = whs.map(function () { return 0 })
    var grand = 0
    if (!f.brand) {
      BRANDS.forEach(function (b) {
        var ps = products.filter(function (p) { return p.brand === b && !p.hidden })
        var vals = whs.map(function (w) { return ps.reduce(function (s, p) { return s + (p.stock[w.id] || 0) }, 0) })
        var tot = vals.reduce(function (a, x) { return a + x }, 0)
        vals.forEach(function (v, i) { colTot[i] += v })
        grand += tot
        rowsHtml += '<tr class="hover:bg-primary/5 cursor-pointer" data-act="ssBrand" data-b="' + E(b) + '" title="' + E(b) + ' 제품별 재고 편집"><td class="border border-base-300 px-4 py-2.5 font-semibold whitespace-nowrap sticky left-0 bg-white" style="z-index: 1;">' + E(b) + '</td>' +
          '<td class="' + td + 'font-bold bg-blue-50 text-blue-700">' + tot + '</td>' + vals.map(function (v) { return '<td class="' + td + cellCls(v) + '">' + v + '</td>' }).join('') + '</tr>'
      })
    } else {
      var ps = products.filter(function (p) { return p.brand === f.brand && !p.hidden })
      ps.sort(function (a, b) { var x = (a.name + a.size).localeCompare(b.name + b.size, 'ko'); return f.desc ? -x : x })
      ps.forEach(function (p) {
        var vals = whs.map(function (w) { return p.stock[w.id] || 0 })
        var tot = vals.reduce(function (a, x) { return a + x }, 0)
        vals.forEach(function (v, i) { colTot[i] += v })
        grand += tot
        rowsHtml += '<tr class="hover:bg-primary/5"><td class="border border-base-300 px-4 py-2.5 font-semibold whitespace-nowrap sticky left-0 bg-white" style="z-index: 1;">' + E(p.name) + ' <span class="text-xs font-normal text-base-content/60">' + E(p.size) + '</span></td>' +
          '<td class="' + td + 'font-bold bg-blue-50 text-blue-700">' + tot + '</td>' +
          whs.map(function (w, i) {
            return '<td class="border border-base-300 px-1 py-1 text-center whitespace-nowrap"><input type="number" min="0" aria-label="' + E(p.name + ' ' + p.size + ' ' + w.name) + '" class="w-full bg-transparent text-center ' + cellCls(vals[i]) + '" style="min-width:64px;padding:6px 0" value="' + vals[i] + '" data-change="ssCell" data-p="' + p.id + '" data-w="' + w.id + '"></td>'
          }).join('') + '</tr>'
      })
      if (!ps.length) rowsHtml = '<tr><td colspan="' + (whs.length + 2) + '" class="border border-base-300 text-center py-8 text-base-content/50">이 브랜드에 등록된 제품이 없습니다.</td></tr>'
    }
    rowsHtml += '<tr class="bg-base-200 font-bold sticky bottom-0" style="z-index: 10;"><td class="border border-base-300 px-4 py-3 whitespace-nowrap sticky left-0 bg-base-200" style="z-index: 11;">합계</td>' +
      '<td class="border border-base-300 px-4 py-3 text-center whitespace-nowrap bg-blue-200 text-blue-900">' + grand + '</td>' +
      colTot.map(function (v) { return '<td class="border border-base-300 px-4 py-3 text-center whitespace-nowrap">' + v + '</td>' }).join('') + '</tr>'

    var brandTotals = BRANDS.map(function (b) { return [b, products.filter(function (p) { return p.brand === b && !p.hidden }).reduce(function (s, p) { return s + stockOf(p, whs) }, 0)] })
    var modelTable = ''
    if (f.model) {
      var models = {}
      products.filter(function (p) { return p.brand === f.model && !p.hidden }).forEach(function (p) {
        var m = models[p.name] || (models[p.name] = whs.map(function () { return 0 }))
        whs.forEach(function (w, i) { m[i] += p.stock[w.id] || 0 })
      })
      var names = Object.keys(models).sort(function (a, b) { return a.localeCompare(b, 'ko') })
      modelTable = '<div class="overflow-auto border border-base-300 rounded-lg"><table class="w-full text-sm" style="border-collapse: separate; border-spacing: 0px;"><thead><tr class="bg-base-200"><th class="border border-base-300 px-4 py-3 text-left font-bold whitespace-nowrap sticky left-0 bg-base-200" style="z-index: 11; min-width: 120px;">제품명</th><th class="border border-base-300 px-4 py-3 text-center font-bold bg-blue-100 whitespace-nowrap" style="min-width: 100px;">토탈</th>' +
        whs.map(function (w) { return '<th class="' + th + '" style="min-width: 100px;">' + E(w.name) + '</th>' }).join('') + '</tr></thead><tbody>' +
        (names.length ? names.map(function (n) {
          var v = models[n], t = v.reduce(function (a, x) { return a + x }, 0)
          return '<tr class="hover:bg-primary/5"><td class="border border-base-300 px-4 py-2.5 font-semibold whitespace-nowrap sticky left-0 bg-white" style="z-index: 1;">' + E(n) + '</td><td class="' + td + 'font-bold bg-blue-50 text-blue-700">' + t + '</td>' + v.map(function (x) { return '<td class="' + td + cellCls(x) + '">' + x + '</td>' }).join('') + '</tr>'
        }).join('') : '<tr><td colspan="' + (whs.length + 2) + '" class="border border-base-300 text-center py-8 text-base-content/50">제품이 없습니다.</td></tr>') +
        '</tbody></table></div>'
    }
    return (
      '<div class="w-full px-4 py-4 flex flex-col "><div class="flex flex-wrap gap-2 items-center justify-between mb-3"><div class="flex flex-wrap items-center gap-3">' + ic('table', 'w-7 h-7 text-primary') +
      '<h1 class="text-2xl font-bold">재고 관리 스프레드시트</h1><div class="flex items-center gap-2"><label class="text-sm font-medium text-base-content/70">재고표</label><div class="relative">' +
      '<button type="button" class="btn btn-sm btn-outline min-w-[160px] justify-between" data-act="ssOpen"><span class="truncate">' + E(sh ? sh.name : '-') + '</span>' + ic('chevD', 'w-4 h-4 ml-1') + '</button>' +
      (f.open ? '<ul class="menu bg-base-100 rounded-lg shadow-lg border border-base-200 absolute left-0 top-full mt-1 w-64 " style="z-index:20">' + sheets.map(function (s) { return '<li><a data-act="ssSheet" data-id="' + s.id + '"' + (s.id === f.sheet ? ' class="active"' : '') + '>' + E(s.name) + '</a></li>' }).join('') + '</ul>' : '') +
      '</div></div></div><div class="flex flex-wrap gap-2 items-center"><div class="relative"><button class="btn btn-sm btn-primary btn-outline" data-act="ssSort">' + ic('sort', 'w-4 h-4') + '<span class="text-xs">' + (f.desc ? '제품명 내림차순' : '제품명 오름차순 (기본)') + '</span></button></div>' +
      '<div class="flex items-center gap-1 border border-base-300 rounded-lg px-1"><button class="btn btn-ghost btn-xs" data-act="ssZoom" data-d="-10" aria-label="축소">' + ic('minus', 'w-3 h-3') + '</button><span class="text-xs font-mono w-10 text-center">' + f.zoom + '%</span>' +
      '<button class="btn btn-ghost btn-xs" data-act="ssZoom" data-d="10" aria-label="확대">' + ic('plus', 'w-3 h-3') + '</button></div>' +
      '<button class="btn btn-ghost btn-sm" title="새로고침" data-act="ssReload">' + ic('refresh', 'w-5 h-5') + '</button>' +
      '<button class="btn btn-ghost btn-sm" title="권한 관리" data-act="demoOnly" data-what="권한 관리">' + ic('shield', 'w-5 h-5') + '권한 관리</button>' +
      '<button class="btn btn-ghost btn-sm" title="엑셀 다운로드/업로드" aria-busy="false" data-act="demoOnly" data-what="엑셀 다운로드/업로드">' + ic('upload', 'w-5 h-5') + '</button>' +
      '<a class="btn btn-secondary btn-sm" href="#/manage/inventory-sheets/' + (sh ? sh.id : 1) + '" title="재고표 관리로 이동하여 창고 설정">' + ic('cog', 'w-5 h-5', 20) + '창고 관리</a></div></div>' +
      '<div class="mb-2"><div class="flex flex-wrap gap-1"><button class="btn btn-xs ' + (f.brand ? 'btn-ghost' : 'btn-primary') + '" data-act="ssBrand" data-b="">전체</button>' +
      BRANDS.map(function (b) { return '<button class="btn btn-xs ' + (f.brand === b ? 'btn-primary' : 'btn-ghost') + '" data-act="ssBrand" data-b="' + E(b) + '">' + E(b) + '</button>' }).join('') + '</div></div>' +
      (f.brand ? '<p class="text-xs text-base-content/60 mb-2">' + E(f.brand) + ' 제품별 창고 재고입니다. 칸의 숫자를 고치면(화살표로 +/-) 토탈과 합계가 바로 바뀝니다.</p>' : '') +
      '<div class="flex flex-col "><div class="flex flex-col gap-4"><div class="overflow-auto border border-base-300 rounded-lg" style="max-height: calc(-80px + 50vh); zoom:' + (f.zoom / 150) + '">' +
      '<table class="w-full text-sm" style="border-collapse: separate; border-spacing: 0px;"><thead class="sticky top-0" style="z-index: 10;">' + head + '</thead><tbody>' + rowsHtml + '</tbody></table></div>' +
      '<div><div class="flex items-center gap-3 mb-2"><label class="text-sm font-semibold">제품명별 재고</label><select class="select select-bordered select-sm w-48" data-change="ssModel"><option value="">브랜드 선택...</option>' +
      brandTotals.map(function (bt) { return '<option value="' + E(bt[0]) + '"' + (f.model === bt[0] ? ' selected' : '') + '>' + E(bt[0]) + ' (' + bt[1] + ')</option>' }).join('') + '</select></div>' + modelTable + '</div>' +
      '</div></div></div>'
    )
  }
  D.on('ssOpen', function () { ui.ss.open = !ui.ss.open; refresh() })
  D.on('ssSheet', function (d) { ui.ss.sheet = +d.id; ui.ss.open = false; refresh() })
  D.on('ssBrand', function (d) { ui.ss.brand = d.b; refresh() })
  D.on('ssSort', function () { ui.ss.desc = !ui.ss.desc; if (!ui.ss.brand) D.toast('브랜드를 고르면 제품명 순서가 바뀝니다'); refresh() })
  D.on('ssZoom', function (d) { ui.ss.zoom = Math.min(200, Math.max(80, ui.ss.zoom + +d.d)); refresh() })
  D.on('ssReload', function () { refresh(); D.toast('재고를 새로 불러왔습니다') })
  D.on('ssModel', function (v) { ui.ss.model = v; refresh() })
  D.on('ssCell', function (v, el) {
    var p = byId(products, el.dataset.p)
    var n = Math.max(0, parseInt(v, 10) || 0)
    var before = p.stock[el.dataset.w] || 0
    p.stock[el.dataset.w] = n
    D.toast(p.name + ' ' + p.size + ' · ' + whName(+el.dataset.w) + ' ' + before + ' → ' + n)
    refresh()
  })

  /* ───────── 재고표(창고) 관리 ───────── */
  function pageInventorySheets() {
    return (
      '<div class="max-w-3xl mx-auto p-4 sm:p-6"><div class="flex items-center justify-between mb-6"><div><h1 class="text-xl font-bold">재고표 관리</h1>' +
      '<p class="text-sm text-base-content/60 mt-1">기본 재고표는 삭제·해제할 수 없습니다. 재고표 삭제가 필요하면 개발자에게 문의하세요.</p></div></div>' +
      '<div class="card bg-base-200 mb-6"><div class="card-body p-4"><form class="flex gap-2" data-submit="sheetCreate"><input type="text" name="name" placeholder="새 재고표 이름 (예: (가상) 한빛모터스)" maxlength="50" class="input input-bordered input-sm flex-1" value="' + E(ui.newSheet) + '" data-input="sheetName" data-k="sheetname">' +
      '<button class="btn btn-primary btn-sm"' + (ui.newSheet.trim() ? '' : ' disabled') + '>' + ic('plus', 'w-4 h-4') + ' 생성</button></form></div></div>' +
      '<div class="overflow-x-auto"><table class="table table-sm"><thead><tr><th class="w-16">ID</th><th>이름</th><th class="w-24">기본</th><th class="w-48">작업</th></tr></thead><tbody>' +
      sheets.map(function (s) {
        var editing = ui.modal && ui.modal.type === 'rename' && ui.modal.id === s.id
        return '<tr><td>' + s.id + '</td><td>' +
          (editing ? '<form class="flex gap-1" data-submit="sheetRename" data-id="' + s.id + '"><input name="name" class="input input-bordered input-xs w-48" value="' + E(s.name) + '" data-k="rename"><button class="btn btn-primary btn-xs">저장</button><button type="button" class="btn btn-ghost btn-xs" data-act="closeModal">취소</button></form>' : E(s.name)) +
          ' <span class="text-xs text-base-content/40">창고 ' + s.whIds.length + '곳</span></td><td>' + (s.isDefault ? '<span class="badge badge-primary badge-sm">기본</span>' : '') + '</td>' +
          '<td><div class="flex gap-1"><a class="btn btn-primary btn-xs" href="#/manage/inventory-sheets/' + s.id + '">' + ic('cog', 'w-3 h-3', 12) + ' 창고 관리</a>' +
          '<button type="button" class="btn btn-ghost btn-xs" data-act="sheetRenameOpen" data-id="' + s.id + '">' + ic('edit', 'w-3 h-3') + ' 이름 변경</button></div></td></tr>'
      }).join('') +
      '</tbody></table></div></div>'
    )
  }
  D.on('sheetName', function (v) {
    ui.newSheet = v
    var b = document.querySelector('[data-submit="sheetCreate"] button')
    if (b) b.disabled = !v.trim()
  })
  D.on('sheetCreate', function (v) {
    var n = (v.name || '').trim()
    if (!n) return
    sheets.push({ id: nextId(sheets), name: n, whIds: [] })
    ui.newSheet = ''
    D.toast('재고표를 만들었습니다, 창고 관리에서 창고를 연결하세요')
    refresh()
  })
  D.on('sheetRenameOpen', function (d) {
    ui.modal = { type: 'rename', id: +d.id }
    refresh()
    var el = document.querySelector('[data-k="rename"]')
    if (el) el.focus()
  })
  D.on('sheetRename', function (v, el) {
    var n = (v.name || '').trim()
    if (!n) return D.toast('이름을 입력하세요')
    byId(sheets, el.dataset.id).name = n
    ui.modal = null
    D.toast('이름을 변경했습니다')
    refresh()
  })
  function pageSheetDetail(id) {
    var s = byId(sheets, id)
    if (!s) return notFound()
    var whs = sheetWh(s.id)
    return (
      '<div class="max-w-3xl mx-auto p-4 sm:p-6"><div class="flex items-center justify-between mb-6"><div><h1 class="text-xl font-bold">창고 관리, ' + E(s.name) + '</h1>' +
      '<p class="text-sm text-base-content/60 mt-1">체크한 창고가 이 재고표(재고 관리 스프레드시트·상품 관리 총재고)에 포함됩니다.</p></div><a class="btn btn-sm" href="#/manage/inventory-sheets">목록</a></div>' +
      '<div class="overflow-x-auto mb-6"><table class="table table-sm"><thead><tr><th class="w-16">포함</th><th>창고</th><th class="text-right">재고 합계</th><th class="text-right">다른 재고표</th></tr></thead><tbody>' +
      warehouses.map(function (w) {
        var on = s.whIds.indexOf(w.id) >= 0
        var tot = products.reduce(function (a, p) { return a + (p.stock[w.id] || 0) }, 0)
        var others = sheets.filter(function (x) { return x.id !== s.id && x.whIds.indexOf(w.id) >= 0 }).map(function (x) { return x.name }).join(', ')
        return '<tr><td><input type="checkbox" class="checkbox checkbox-sm" data-change="sheetWh" data-s="' + s.id + '" data-w="' + w.id + '"' + (on ? ' checked' : '') + (s.isDefault ? '' : '') + '></td><td>' + E(w.name) + '</td><td class="text-right">' + N(tot) + '</td><td class="text-right text-xs text-base-content/50">' + E(others) + '</td></tr>'
      }).join('') +
      '</tbody></table></div><div class="card bg-base-200"><div class="card-body p-4"><form class="flex gap-2" data-submit="whCreate" data-s="' + s.id + '"><input name="name" class="input input-bordered input-sm flex-1" placeholder="새 창고 이름 (예: 동부2센터)"><button class="btn btn-primary btn-sm">' + ic('plus', 'w-4 h-4') + ' 창고 추가</button></form></div></div>' +
      '<p class="text-sm text-base-content/60 mt-4">포함된 창고 ' + whs.length + '곳 · <a class="link" href="#/manage/spreadsheet">재고 관리 스프레드시트로 이동</a></p></div>'
    )
  }
  D.on('sheetWh', function (v, el) {
    var s = byId(sheets, el.dataset.s), w = +el.dataset.w
    if (el.checked) { if (s.whIds.indexOf(w) < 0) s.whIds.push(w) } else s.whIds = s.whIds.filter(function (x) { return x !== w })
    s.whIds.sort(function (a, b) { return a - b })
    refresh()
  })
  D.on('whCreate', function (v, el) {
    var n = (v.name || '').trim()
    if (!n) return D.toast('창고 이름을 입력하세요')
    var w = { id: nextId(warehouses), name: n }
    warehouses.push(w)
    products.forEach(function (p) { p.stock[w.id] = 0 })
    byId(sheets, el.dataset.s).whIds.push(w.id)
    D.toast('창고를 추가했습니다')
    refresh()
  })

  /* ───────── 제품 그룹 ───────── */
  function pageProductGroups() {
    return (
      '<div class="max-w-5xl mx-auto p-4 sm:p-6"><div class="flex items-center justify-between mb-6"><h1 class="text-xl font-bold">제품 그룹 관리</h1>' +
      '<a class="btn btn-primary btn-sm" href="#/manage/product-groups/new">' + ic('plus', 'w-4 h-4') + '새 그룹</a></div><div class="space-y-3">' +
      (pgroups.length ? pgroups.slice().reverse().map(function (g) {
        var shown = g.models.slice(0, 3).join(', ') + (g.models.length > 3 ? ' 외 ' + (g.models.length - 3) + '개' : '')
        return '<div class="card card-compact bg-base-100 shadow-sm border border-base-200"><div class="card-body"><div class="flex items-start justify-between gap-4"><div class="flex-1 min-w-0">' +
          '<h2 class="font-semibold text-base">' + E(g.name) + '</h2><div class="flex flex-wrap gap-1 mt-1">' +
          (g.aliases.length ? g.aliases.map(function (a) { return '<span class="badge badge-outline badge-sm">' + E(a) + '</span>' }).join('') : '<span class="text-xs text-warning">별칭 없음</span>') + '</div>' +
          '<p class="text-xs text-base-content/50 mt-1">연결 제품명 ' + g.models.length + '개' + (g.models.length ? '<span class="ml-1">(' + E(shown) + ')</span>' : '') + '</p></div>' +
          '<div class="flex gap-1 shrink-0"><a class="btn btn-ghost btn-sm btn-square" href="#/manage/product-groups/' + g.id + '/edit" aria-label="수정">' + ic('edit', 'w-4 h-4') + '</a>' +
          '<button class="btn btn-ghost btn-sm btn-square text-error" data-act="pgDel" data-id="' + g.id + '" aria-label="삭제">' + ic('trash', 'w-4 h-4') + '</button></div></div></div></div>'
      }).join('') : '<div class="text-center py-12 text-base-content/50 border rounded">등록된 제품 그룹이 없습니다.</div>') +
      '</div></div>'
    )
  }
  function pgForm(g) {
    var isNew = !g.id
    var models = modelsOf('')
    return (
      '<div class="max-w-5xl mx-auto p-4 sm:p-6"><h1 class="text-xl font-bold mb-6">' + (isNew ? '새 제품 그룹' : '제품 그룹 수정') + '</h1><form class="grid gap-4" data-submit="pgSave"' + (isNew ? '' : ' data-id="' + g.id + '"') + '>' +
      '<div class="grid sm:grid-cols-2 gap-3"><div><label class="label label-text text-sm">그룹 이름</label><input name="name" class="input input-bordered w-full" value="' + E(g.name || '') + '" placeholder="예: 윈터"></div>' +
      '<div><label class="label label-text text-sm">별칭 (쉼표로 구분)</label><input name="aliases" class="input input-bordered w-full" value="' + E((g.aliases || []).join(', ')) + '" placeholder="예: WIN, 스노우"></div></div>' +
      '<div><label class="label label-text text-sm">연결 제품명</label><div class="grid sm:grid-cols-2 gap-2 max-h-96 overflow-y-auto border border-base-200 rounded-lg p-2">' +
      models.map(function (m, i) { return '<label class="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" class="checkbox checkbox-sm" name="m' + i + '"' + ((g.models || []).indexOf(m) >= 0 ? ' checked' : '') + '>' + E(m) + '</label>' }).join('') +
      '</div></div><div class="flex gap-2"><a class="btn btn-sm" href="#/manage/product-groups">취소</a><button class="btn btn-primary btn-sm">저장</button></div></form></div>'
    )
  }
  D.on('pgSave', function (v, el) {
    var name = (v.name || '').trim()
    if (!name) return D.toast('그룹 이름을 입력하세요')
    var models = modelsOf('').filter(function (m, i) { return v['m' + i] })
    var aliases = (v.aliases || '').split(',').map(function (s) { return s.trim() }).filter(Boolean)
    if (el.dataset.id) { var g = byId(pgroups, el.dataset.id); g.name = name; g.aliases = aliases; g.models = models }
    else pgroups.push({ id: nextId(pgroups), name: name, aliases: aliases, models: models })
    D.toast('제품 그룹을 저장했습니다')
    D.go('/manage/product-groups')
  })
  D.on('pgDel', function (d) { pgroups = pgroups.filter(function (g) { return g.id !== +d.id }); D.toast('제품 그룹을 삭제했습니다'); refresh() })

  /* ───────── 공지 관리 ───────── */
  function pageNotices() {
    return (
      '<div class="container"><div class="overflow-x-auto"><h2 class="font-semibold text-2xl py-4">공지사항</h2><div class="text-right"><a href="#/manage/notices/create"><button class="btn">공지사항 작성</button></a></div>' +
      '<div><table class="table"><thead><tr><th>게시일</th><th>상단 여부</th><th>제목</th><th>내용</th><th>수정</th></tr></thead><tbody>' +
      sortedNotices().map(function (n) {
        return '<tr class="hover"><td class="whitespace-nowrap">' + E(n.date) + '</td><td>' + (n.top ? '<span class="badge badge-primary badge-sm">상단</span>' : '-') + '</td>' +
          '<td><a class="link" data-act="noticeOpen" data-id="' + n.id + '">' + E(n.title) + '</a></td><td class="max-w-xs truncate">' + E(n.content.split('\n')[0]) + '</td>' +
          '<td><a class="btn btn-sm" href="#/manage/notices/' + n.id + '/edit">수정</a></td></tr>'
      }).join('') +
      '</tbody></table>' + (ui.modal && ui.modal.type === 'notice' ? noticeModal() : '') + '</div></div></div>'
    )
  }
  function noticeForm(n) {
    var isNew = !n.id
    return (
      '<div class="container max-w-3xl"><h2 class="font-semibold text-2xl py-4">' + (isNew ? '공지사항 작성' : '공지사항 수정') + '</h2><form class="grid gap-3" data-submit="noticeSave"' + (isNew ? '' : ' data-id="' + n.id + '"') + '>' +
      '<input name="title" class="input input-bordered w-full" placeholder="제목" value="' + E(n.title || '') + '">' +
      '<label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="top" class="checkbox checkbox-sm"' + (n.top ? ' checked' : '') + '>상단 고정</label>' +
      '<textarea name="content" class="textarea textarea-bordered w-full" rows="8" placeholder="내용을 입력하세요">' + E(n.content || '') + '</textarea>' +
      '<div class="flex gap-2"><a class="btn" href="#/manage/notices">취소</a>' + (isNew ? '' : '<button type="button" class="btn btn-error" data-act="noticeDelGo" data-id="' + n.id + '">삭제</button>') + '<div class="flex-1"></div><button class="btn btn-primary">' + (isNew ? '등록' : '저장') + '</button></div></form></div>'
    )
  }
  D.on('noticeSave', function (v, el) {
    if (!(v.title || '').trim()) return D.toast('제목을 입력하세요')
    if (el.dataset.id) { var n = byId(notices, el.dataset.id); n.title = v.title.trim(); n.content = v.content; n.top = !!v.top }
    else notices.push({ id: nextId(notices), date: TODAY, title: v.title.trim(), content: v.content, top: !!v.top })
    D.toast('공지사항을 저장했습니다, 홈 화면에도 표시됩니다')
    D.go('/manage/notices')
  })
  D.on('noticeDelGo', function (d) { notices = notices.filter(function (n) { return n.id !== +d.id }); D.toast('공지를 삭제했습니다'); D.go('/manage/notices') })

  /* ───────── 할인율 그룹 ───────── */
  var DC_YEARS = [2024, 2025, 2026]
  function pageDcGroups() {
    return (
      '<div class="container"><div class="flex items-center justify-between mb-4 flex-wrap gap-2"><h1 class="text-3xl font-bold">할인율 그룹 관리</h1><div class="flex items-center gap-2">' +
      '<a href="#/manage/dc-groups/purchase-rates"><button class="btn btn-outline">매입 할인율 조회</button></a><a href="#/manage/dc-groups/new"><button class="btn btn-primary">+ 새 그룹 추가</button></a></div></div>' +
      '<p class="text-sm text-base-content/60 mb-4">거래처별 단가 정책을 그룹 단위로 관리. 거래처 API 키 발급 시 그룹을 선택하면 그 그룹의 연도별 할인율로 dealer_price 가 산출됩니다. 마스터 전용.</p>' +
      (dcGroups.length
        ? '<div class="overflow-x-auto border rounded"><table class="table w-full"><thead><tr><th>그룹명</th>' + DC_YEARS.map(function (y) { return '<th class="text-right">' + y + '년</th>' }).join('') + '<th>메모</th><th class="text-right">관리</th></tr></thead><tbody>' +
          dcGroups.map(function (g) {
            return '<tr class="hover"><td class="font-semibold">' + E(g.name) + '</td>' + DC_YEARS.map(function (y) { return '<td class="text-right">' + E(g.rates[y]) + '%</td>' }).join('') + '<td class="text-sm text-base-content/60">' + E(g.memo) + '</td>' +
              '<td class="text-right whitespace-nowrap"><a class="btn btn-ghost btn-sm btn-square" href="#/manage/dc-groups/' + g.id + '/edit" aria-label="수정">' + ic('edit', 'w-4 h-4') + '</a><button class="btn btn-ghost btn-sm btn-square text-error" data-act="dcDel" data-id="' + g.id + '" aria-label="삭제">' + ic('trash', 'w-4 h-4') + '</button></td></tr>'
          }).join('') + '</tbody></table></div>'
        : '<div class="text-center py-12 text-base-content/50 border rounded">등록된 할인율 그룹이 없습니다. 우측 상단 <b>"+ 새 그룹 추가"</b>로 시작하세요.</div>') +
      '</div>'
    )
  }
  function dcForm(g) {
    var isNew = !g.id
    var sample = products[0]
    return (
      '<div class="container max-w-3xl"><h1 class="text-3xl font-bold mb-6">' + (isNew ? '새 할인율 그룹' : '할인율 그룹 수정') + '</h1><form class="grid gap-3" data-submit="dcSave"' + (isNew ? '' : ' data-id="' + g.id + '"') + '>' +
      '<div><label class="label label-text text-sm">그룹명</label><input name="name" class="input input-bordered w-full" value="' + E(g.name || '') + '" placeholder="(가상) 그룹명"></div>' +
      '<div class="grid grid-cols-3 gap-3">' + DC_YEARS.map(function (y) { return '<div><label class="label label-text text-sm">' + y + '년 할인율(%)</label><input type="number" min="0" max="90" name="y' + y + '" class="input input-bordered w-full" value="' + E(g.rates ? g.rates[y] : 20) + '"></div>' }).join('') + '</div>' +
      '<div><label class="label label-text text-sm">메모</label><input name="memo" class="input input-bordered w-full" value="' + E(g.memo || '') + '"></div>' +
      (sample ? '<p class="text-xs text-base-content/50">예시: ' + E(pLabel(sample)) + ' 공장도가 ' + N(sample.price) + '원 → 올해 할인율 적용 시 dealer_price ' + N(r100(sample.price * (1 - ((g.rates ? g.rates[2026] : 20) / 100)))) + '원</p>' : '') +
      '<div class="flex gap-2"><a class="btn" href="#/manage/dc-groups">취소</a><div class="flex-1"></div><button class="btn btn-primary">저장</button></div></form></div>'
    )
  }
  D.on('dcSave', function (v, el) {
    if (!(v.name || '').trim()) return D.toast('그룹명을 입력하세요')
    var rates = {}
    DC_YEARS.forEach(function (y) { rates[y] = Math.max(0, Math.min(90, +v['y' + y] || 0)) })
    if (el.dataset.id) { var g = byId(dcGroups, el.dataset.id); g.name = v.name.trim(); g.rates = rates; g.memo = v.memo }
    else dcGroups.push({ id: nextId(dcGroups), name: v.name.trim(), rates: rates, memo: v.memo })
    D.toast('할인율 그룹을 저장했습니다')
    D.go('/manage/dc-groups')
  })
  D.on('dcDel', function (d) { dcGroups = dcGroups.filter(function (g) { return g.id !== +d.id }); D.toast('할인율 그룹을 삭제했습니다'); refresh() })
  function pagePurchaseRates() {
    return (
      '<div class="container max-w-3xl"><div class="flex items-center justify-between mb-4 flex-wrap gap-2"><h1 class="text-3xl font-bold">매입 할인율 조회</h1><a href="#/manage/dc-groups"><button class="btn btn-outline">목록</button></a></div>' +
      '<p class="text-sm text-base-content/60 mb-4">브랜드별 매입 할인율(공장도가 대비)입니다. 체험판 가상 수치입니다.</p>' +
      '<div class="overflow-x-auto border rounded"><table class="table w-full"><thead><tr><th>브랜드</th><th class="text-right">' + (+YEAR - 1) + '년</th><th class="text-right">' + YEAR + '년</th><th class="text-right">변동</th></tr></thead><tbody>' +
      purchaseRates.map(function (r) {
        var d = r.y2026 - r.y2025
        return '<tr class="hover"><td>' + E(r.brand) + '</td><td class="text-right">' + r.y2025 + '%</td><td class="text-right font-semibold">' + r.y2026 + '%</td><td class="text-right ' + (d > 0 ? 'text-success' : d < 0 ? 'text-error' : '') + '">' + (d > 0 ? '+' : '') + d + '%p</td></tr>'
      }).join('') + '</tbody></table></div></div>'
    )
  }

  /* ───────── 제공하지 않는 화면 ───────── */
  function unavailable(title) {
    return '<div class="container"><h1 class="text-3xl font-bold mb-4">' + E(title) + '</h1><div class="text-center py-16 text-base-content/50 border rounded">체험판에서는 이 화면을 제공하지 않습니다.<div class="mt-4"><a class="btn btn-sm" href="#/">홈으로</a></div></div></div>'
  }
  function notFound() { return unavailable('페이지를 찾을 수 없습니다') }

  /* ───────── 라우터 ───────── */
  function content(path) {
    var m
    switch (path) {
      case '/': return pageHome()
      case '/manage/basic/business-sites': return pageBusinessSites()
      case '/manage/basic/partners': return pagePartners()
      case '/manage/purchase': return slipPage('purchase')
      case '/manage/sales': return slipPage('sales')
      case '/manage/slips': return pageSlips()
      case '/manage/payments': return pagePayments()
      case '/manage/users': return pageUsers()
      case '/manage/users/register': return userForm({}, true)
      case '/manage/roles': return pageRoles()
      case '/manage/roles/new': return roleForm({})
      case '/manage/order': return pageOrder()
      case '/manage/product': return pageProduct()
      case '/manage/spreadsheet': return pageSpreadsheet()
      case '/manage/inventory-sheets': return pageInventorySheets()
      case '/manage/product-groups': return pageProductGroups()
      case '/manage/product-groups/new': return pgForm({})
      case '/manage/notices': return pageNotices()
      case '/manage/notices/create': return noticeForm({})
      case '/manage/dc-groups': return pageDcGroups()
      case '/manage/dc-groups/new': return dcForm({})
      case '/manage/dc-groups/purchase-rates': return pagePurchaseRates()
      case '/manage/partner-keys': return unavailable('거래처 API 키')
      case '/chat': return unavailable('챗봇')
    }
    if ((m = path.match(/^\/manage\/users\/(\d+)$/))) { var u = byId(users, m[1]); return u ? userForm(u, false) : notFound() }
    if ((m = path.match(/^\/manage\/roles\/(\d+)\/edit$/))) { var r = byId(roles, m[1]); return r ? roleForm(r) : notFound() }
    if ((m = path.match(/^\/manage\/inventory-sheets\/(\d+)$/))) return pageSheetDetail(m[1])
    if ((m = path.match(/^\/manage\/product-groups\/(\d+)\/edit$/))) { var g = byId(pgroups, m[1]); return g ? pgForm(g) : notFound() }
    if ((m = path.match(/^\/manage\/notices\/(\d+)\/edit$/))) { var n = byId(notices, m[1]); return n ? noticeForm(n) : notFound() }
    if ((m = path.match(/^\/manage\/dc-groups\/(\d+)\/edit$/))) { var dg = byId(dcGroups, m[1]); return dg ? dcForm(dg) : notFound() }
    return notFound()
  }

  var lastPath = null
  D.mount(function (route) {
    if (route.path !== lastPath) { ui.modal = null; ui.ss.open = false; lastPath = route.path }
    return '<div class="">' + header(route.path) + '<section class="Toastify" aria-live="polite" aria-atomic="false" aria-relevant="additions text" aria-label="Notifications Alt+T"></section>' + content(route.path) + '</div>'
  })
  D.banner()
})()
