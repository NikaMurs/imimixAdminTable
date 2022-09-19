const adminMenu = document.querySelectorAll('.adminMenu')
const submenu = document.querySelectorAll('.submenu');
const menuList = document.querySelectorAll('.menuList');

for(let i = 0; i < menuList.length; i++){
    menuList[i].onclick = ()=>{
        if (submenu[i].classList.contains('submenuActive')){
            submenu[i].classList.remove('submenuActive')
            return false
        }

        for (let j = 0; j < menuList.length; j++){
            submenu[j].classList.remove('submenuActive');
        }

        submenu[i].classList.add('submenuActive')
        return false        
    }
}