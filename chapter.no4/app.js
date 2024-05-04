
    // 1. Declare 3 variables in one statement
    var Name, age, qualifications;

    // 2. Declare 5 legal & 5 illegal variable names
    // Legal variable names
    var twentydollar$;
    var WithCamelCase;
    var _withUnderscore;
    var thecupisbroken;
    var MyName;

    // five illegal variable names:
    // var 3mynumber; // it Starts with a number
    // var -illegal!symbol; // has special character other than $ and _
    // var my email; // has space
    // var BYTE; // it is a Reserved keyword
    // var my-address; // has hyphen

    // 3. Display rules in the browser
    document.write("<h1>Rules for naming JS variables</h1>");
    document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.</p>");
    document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.</p>");
    document.write("<p>Variable names are case-sensitive.</p>");
    document.write("<p>Variable names should not be JavaScript keywords.</p>");

