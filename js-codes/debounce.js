function search(name){
    console.log(name)
}

function debounce(fn,delay){
    
    let timer;
    return function(...args){
        // clearTimeout(timer);
        const content =this
         timer=setTimeout(()=>{
            fn.apply(content,args)
        },delay)
    }
    
}

const debounceSearch=debounce(search,500)

// const debouncedSearch = debounce(search, 500);

debounceSearch("Tharun");
debounceSearch("Tharun");
