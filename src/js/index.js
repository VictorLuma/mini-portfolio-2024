/* 

        objetivo - ao clicar na aba tem que mostrar o conteúdo da aba clicada pelo usuário e esconder o conteúdo da anterior

        1 Passo -  pegar os elementos que representam as tabs no HTML

        2 Passo - identificar o clique no elemento da aba

        3 Passo - quando o usuário clicar, desmarcar a aba selecionada

        4 Passo - marcar a aba clicada como selecionada

        5 Passo - esconder o conteúdo anterior

        6 Passo - Mostrar o conteúdo da aba selecionada

*/

// 1 Passo -  pegar os elementos que representam as tabs no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    //2 Passo - identificar o clique no elemento da aba
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;

        }

        //3 Passo - quando o usuário clicar, desmarcar a aba selecionada
        const tabSelected = document.querySelector(".tab.selected");
        tabSelected.classList.remove("selected");

        //4 Passo - marcar a aba clicada como selecionada
        tab.classList.add("selected")
        
        //5 Passo - esconder o conteúdo anterior
        const infoselected = document.
        querySelector(".info.selected");
        infoselected.classList.remove("selected");

        //6 Passo - Mostrar o conteúdo da aba selecionada
        const ElementInfoTabId = `info-${tab.id}`

        const infoToShow = document.getElementById(ElementInfoTabId)
        infoToShow.classList.add("selected")
    });
});

