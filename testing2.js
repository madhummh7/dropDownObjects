//global array will store the objects
let selectedObjects = [];

//function to filter Data based on selected options
function filterData(categoryName, selectElement) {
  console.log(
    "function containing argument" + " " + categoryName + " " + "is called"
  );

  // reseting the  selectedObjects for the current category
  //this key refres to selecetElement changes with onchange event

  selectedObjects = selectedObjects.filter(
    (item) => item.category !== categoryName
  );

  // need to use filter and map to add selected options to selectedObjects
  // selectElement.options is HTML collection
  const selectedOptions = Array.from(selectElement.options)
    .filter((option) => option.selected && option.innerHTML !== "Select")
    .map((option) => ({
      category: categoryName,
      id: option.value,
      name: option.innerText,
    }));

  //ensuring that data is not already available in selectedObjects

  selectedOptions.forEach((data) => {
    const isAlreadySelected = selectedObjects.some(
      (eachData) =>
        eachData.category === data.category && eachData.id === data.id
    );
    if (!isAlreadySelected) {
      selectedObjects.push(data);
    }
  });

  console.log(typeof selectedObjects);

  //data shown in UI

  const selectedDataContainer = document.getElementById("filteredData");
  console.log(selectedObjects);
  selectedDataContainer.innerHTML = JSON.stringify(selectedObjects, null, 2);
}
