function menuGroup($scope){
  $scope.menuGroupLeft = [
    { 
      title: 'Dashboard', 
      href:'#',
      sub_menu: [
      ]
    },
    { 
      title: 'Projects', 
      href:'#',
      sub_menu: [
        { title: 'Project setup', href: 'project_setup' },
        { title: 'My projects', href: '#' }
      ]
    },
    { 
      title: 'Reports', 
      href:'#',
      sub_menu: [
        { title: 'Dashboard', href: '#' }
      ]
    },
    { 
      title: 'Contacts', 
      href:'#',
      sub_menu: [
        { title: 'Dashboard', href: '#' }
      ]
    },
    { 
      title: 'Settings',
      href:'#',
      sub_menu: [
        { title: 'Dashboard', href: '#' }
      ]
    }
  ];
}

function selectbox($scope){
  $scope.countries = [
    {name: 'Central African Republic', code: 'CF'},
    {name: 'Chad', code: 'TD'},
    {name: 'Chile', code: 'CL'},
    {name: 'China', code: 'CN'},
    {name: 'Cook Islands', code: 'CK'},
    {name: 'Costa Rica', code: 'CR'},    
    {name: 'Georgia', code: 'GE'},
    {name: 'Germany', code: 'DE'},
    {name: 'Guernsey', code: 'GG'},
    {name: 'Guinea', code: 'GN'},
    {name: 'Guinea-Bissau', code: 'GW'},
    {name: 'Guyana', code: 'GY'},
    {name: 'Haiti', code: 'HT'},
    {name: 'Honduras', code: 'HN'},
    {name: 'Hong Kong', code: 'HK'},
    {name: 'Hungary', code: 'HU'},
    {name: 'Iceland', code: 'IS'},
    {name: 'India', code: 'IN'},
    {name: 'Libyan Arab Jamahiriya', code: 'LY'},
    {name: 'Liechtenstein', code: 'LI'},
    {name: 'Montserrat', code: 'MS'},
    {name: 'Myanmar', code: 'MM'},
    {name: 'Senegal', code: 'SN'},
    {name: 'Singapore', code: 'SG'},
    {name: 'Slovakia', code: 'SK'},
    {name: 'Slovenia', code: 'SI'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'}
  ];

  $scope.managers = [
   'Alex Ferguson',
   'Jose Mourinho',
   'Blatter'
  ];
}