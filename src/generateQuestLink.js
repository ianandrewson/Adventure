export const generateQuestLink = quest => {
    //const ID = quest.ID;
    const link = document.createElement('a');
    link.classList.add('quest');
    link.href = '../quest/?id=' + quest.id;
    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    console.log(quest.title);
    link.textContent = quest.title;
    return link;

};