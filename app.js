// albumId: 1
// id: 1
// thumbnailUrl: "https://via.placeholder.com/150/92c952"
// title: "accusamus beatae ad facilis cum similique qui sunt"
// url: "https://via.placeholder.com/600/92c952"

function showUsers(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const arts = data.splice(0, 100);
            console.log(arts);
            const artList = document.querySelector('#art-list');
            arts.map(item => {
                artList.innerHTML += `
                <div class='d-flex p-2 artwork-item'>
                    <img class='img-fluid' src='${item.thumbnailUrl}' alt='${item.title}'/>
                    <div class="title-and-button w-100">
                        <div>
                            <p class='ms-3'>
                                <small>
                                    ${item.title}
                                </small>
                            </p>
                        </div>
                        <div class="save-button w-50">
                            <p class='d-flex justify-content-around'>
                                <button class="btn mx-1 btn-primary">
                                    <i class="fas fa-volume-up"></i>
                                </button>
                                <button class="btn mx-1 btn-primary">
                                    <i class="far fa-square"></i>
                                </button>
                                <button class="btn mx-1 btn-secondary">
                                    <i class="far fa-save"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                `
            })
        })
        .catch(err => console.log(err));
}

showUsers('https://jsonplaceholder.typicode.com/photos');