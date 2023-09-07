export default {
  editor: {
    label: {
      en: "Primevue Badge",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },

    badgeText: {
      label: { en: "Text content" },
      bindable: true,
      type: "Text",
      defaultValue: "",
    },
  },
};
