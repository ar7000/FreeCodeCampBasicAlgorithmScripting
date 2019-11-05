Working through Basic Algorithm Scripting via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn.

- Learned to use .split(), .reverse(), and .join() methods.
    - .split() takes a string and splits it into an array. Whether split into an array of words or characters depends on what is put between parentheses. Example:
    ```
    const lyric = "but the memory remains"
    const lyricWords = lyric.split(' '); //Space between quotes. Would return ["but", "the", "memory", "remains"]
    const lyricChars = lyric.split(''); //No space between quotes. Would return ["b","u","t"," ","t","h","e"," ","m","e","m","o","r","y"," ","r","e","m","a","i","n","s"]
    ```

    - .reverse() reverses an array in place. Example:
    ```
    const sampleStr = ["This","is","not","a","palindrome"]
    const reversed = sampleStr.reverse(); //Would return ["palindrome","a","not","is","This"]
    ```

    - .join() takes an array and joins elements together as a string. Can join elements together with a comma separation, as one word or a specified character. Example:
    ```
    const sampleStr = ["It","is","morning"];
    const joinedComma = sampleStr.join(); //Returns "It,is,morning"
    const joinedOneWord = sampleStr.join(''); //Returns "Itismorning"
    const joinedChar = sampleStr.join(' '); //Returns "It is morning"
    ```