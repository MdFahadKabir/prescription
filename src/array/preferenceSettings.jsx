const preferenceSettings = [
  {
    category: "Prescription",
    childArray: [
      { name: "Patient Info", active: true },
      { name: "Blood Group", active: false },
      { name: "Address", active: true },
      { name: "Sex", active: false },
    ],
  },
  {
    category: "History",
    childArray: [
      { name: "Illness", active: true },
      { name: "Drug", active: true },
      { name: "Surgical", active: true },
      { name: "Family", active: true },
      { name: "Socio", active: true },
      { name: "Personal", active: true },
      { name: "Menstrual", active: true },
      { name: "Obstetric", active: true },
    ],
  },
  {
    category: "General Examination",
    childArray: [
      { name: "Appearance", active: true },
      { name: "Built", active: true },
      { name: "Nutrition", active: true },
      { name: "Dewbitus", active: true },
      { name: "Anemia", active: true },
      { name: "Jawndice", active: true },
      { name: "Cyanosis", active: true },
      { name: "Cyanosis", active: true },
    ],
  },
  {
    category: "Medicine",
    childArray: [
      { name: "Generic Name", active: true },
      { name: "Company Name", active: true },
    ],
  },
];
export default preferenceSettings;
