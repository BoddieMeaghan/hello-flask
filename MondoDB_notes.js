

db.createUser({
    user:'Meaghan',
    pwd: 'password',
    customData:{startDate: new Date()},
    roles: [
        {role: 'clusterAdmin', db: 'admin'},
        {role: 'readAnyDatabase', db: 'admin'},
        'readWrite'
    ]
})
