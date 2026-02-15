let n = 7;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
       
        process.stdout.write(
            ((i < j && i < -(~(n - i)) && i < -(~(n - j)) ? i : (j < -(~(n - i)) && j < -(~(n - j))) ? j :
            (n - i < n - j ) ? -(~(n - i )) : -(~(n - j ))) + " "));      
    }
    console.log(""); 
}