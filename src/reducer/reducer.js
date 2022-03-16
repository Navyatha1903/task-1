
const uniReducer = (state = [],action) => {
    switch(action.type) {
        case "ADD_WISH_LIST":
                console.log(`payload =`, action.payload);
                if(localStorage.getItem("wishList") === null || localStorage.getItem("wishList") === [] || localStorage.getItem("wishList") === undefined ){
                    let wishList = [];
                    wishList.push(action.payload);
                    localStorage.setItem("wishList", JSON.stringify(wishList));
                  } else {
                    let wishList = JSON.parse(localStorage.getItem("wishList"));
                    wishList.push(action.payload);
                    localStorage.setItem("wishList", JSON.stringify(wishList));
                  }
                window.alert("Added to wishlist successfully");
                window.location.href = "/wishlist";
        break;

        case "REMOVE_WISH_LIST":

        break;

        default: return state;
    }
}

export default uniReducer;
