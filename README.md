# jspopup
## Introduction
JsPopup is a simple popup written in vanilla Javascript. You can use it in any of your application where, whether, you need to display a popup with simple message, or need to process any function. You can achieve both the goals.

## Installation - CDN
The most easiest way to Use JsPopup is to use CDN link:

```
<script src="https://cdn.jsdelivr.net/gh/pradeepkumarverma1/jspopup@1.0.1/popup.js"></script>
```
Always use the latest version. The lastest version is **1.0.1**

## Usage
Once you have linked the CDN, you can simply use the jspopup.

1. If you want to display a simple message

```
<script>

  popup({

    title: "Your title here...", // Required
    message: "Your long form message here...", //Required

  });

</script>
```

2. If you want to add action when clicked on positive button

```
<script>

  popup({
    title: "Popup title here...",
    message: "Popup message here...",
  },
  
    //Positive button click action goes here
    //Pass an arrow function 
    
    () => {
      alert("The action performed when clicked on Positive action button.");
    }
  );

</script>
```

## Customizations
You can customize positive action and negative action buttons, in the following ways. (It's kinda simple)

```
<script>

  popup({
    title: "Popup title goes here..",
    message: "Popup messaage goes here..",
    
    //Positive button customization
    
    positiveButton: {
      text: "Okay, continue", // Defaults to "Continue"
      background: "blue", // You can also use HexCode and rgba()
      color: "white", // You can also use HexCode and rgba()
    },
    
    //Negative button customization
    
    negativeButton: {
      text: "Deny", // Defaults to "Cancel"
      background: "tomato", // You can also use HexCode and rgba()
      color: "white" // You can also use HexCode and rgba()
    },
  
  });

</script>
```


