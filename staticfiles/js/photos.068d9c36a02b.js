


function fphotos(v) {

    return `

    <div style="padding-top:20px" class="col">
    <div class="card" style="width: 8rem;">
        <img src="${v.thumbnailUrl}" class="card-img-top" alt="">
        <div style="text-align: center;" class="card-body">
            ${v.id}
            
        </div>
    </div>
    </div>
      
        `;
}


