function addon(){
    let title = document.getElementById('title').value
    let desc = document.getElementById('desc').value
    let date = document.getElementById('date').value
    
    let insert = document.getElementById('newone')
    let inside = insert.innerHTML

    if (title != '' && date != '' && desc !=''){
        insert.innerHTML = inside + '<div class="col-sm-3" style="color: #923d41;">'+title+'</div><div class="col-sm-3" style="color: #923d41;">'+desc+'</div><div class="col-sm-3" style="color: #923d41;">'+date+'</div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></div><hr>';
    };
};