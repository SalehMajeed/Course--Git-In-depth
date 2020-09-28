/*
    1. git -> 
        it is the storage to store data in the form of key and value where value can be retrieve using that key. it stores the compressed data in a blob,with metadata in header.
    2. git hash-object --stdin.
        we can generate SHA1 of the data using pipe and openssl sha1 or hash-object --stdin.
    3. git store data in .git directory.
    4. tree .git -> to show of tree graph of data.
    5. git cat-file -t or -p(print contents)-> return type our binaray data like commit etc.
    6. git log -> it show the commits that has been done in our project.
      using --oneline flag can wrap data in single lines.
     --no-pager flag fit contents in one line.
    7. git branch 'name' -> will create new branch of project.
*/