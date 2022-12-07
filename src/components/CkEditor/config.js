const editorConfig = {
  colorButton_enableAutomatic: false,
  extraAllowedContent: 'iframe[*]',
  allowedContent: true,
  toolbar: [
    {
      name: 'document',
      items: ['Source', '-'],
    },
    {
      name: 'basicstyles',
      items: ['Bold', 'Italic'],
    },
    {
      name: 'insert',
      items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'],
    },
    {
      name: 'colors',
      items: ['TextColor', 'BGColor'],
    },
    {
      name: 'paragraph',
      groups: ['list', 'indent', 'blocks', 'align', 'bidi'],
      items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-'],
    },
    {
      name: 'styles',
      items: ['Styles', 'Format'],
    },

    {
      name: 'links',
      items: ['Link', 'Unlink', '-'],
    },
  ],
};

export default editorConfig;
