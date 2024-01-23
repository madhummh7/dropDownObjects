let selectedObjects = [];

// Filter Data based on selected options
function filterData(categoryName, selectElement) {
  console.log(
    "function containing argument" + " " + categoryName + " " + "is called"
  );
  // Reseting the  selectedObjects for the current category before adding newly selected one
  selectedObjects = selectedObjects.filter((item) => {
    //initially it pushing the
    return item.category !== categoryName;
  });

  // console.log(selectedObjects.length);
  // looping through selected options and adding to selectedObjects
  //this key refres to selecetElement

  //for loop for each selecetd options
  for (let i = 0; i < selectElement.options.length; i++) {
    // console.log(selectElement.options.length);
    const option = selectElement.options[i];

    // console.dir(option);
    const optionValue = option.innerHTML;
    // console.log(optionValue);

    if (option.selected && optionValue !== "Select") {
      const data = {
        category: categoryName,
        id: option.value,
        name: option.innerText,
      };
      console.log(data);

      //data checking if weather exist or not in selectedObjects
      if (
        !selectedObjects.some(
          (eachData) =>
            eachData.category === data.category && eachData.id === data.id
        )
      ) {
        selectedObjects.push(data);
      }
    }
  }

  console.log(selectedObjects);
  //Json data Displaying
  const selectedDataContainer = document.getElementById("filteredData");

  selectedDataContainer.innerHTML = JSON.stringify(selectedObjects, null, 2);
}
