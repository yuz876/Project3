const projects = [
{   
    projectId: "abc123", 
    name: "Project 1", 
    userProjects: [
        { 
            userId: "xyz789", 
            projectId: "abc123", 
            user: { 
                userId: "xyz789",
                email: "user1@test.com"
            }
        },
        {
            userId: "sdf012",
            projectId: "abc123",
            user: {
                userId: "sdf012",
                email: "user2@test.com",
            },
        }
    ],
},
{
    projectId: "def456",
    name: "Project 2",
    userProjects: [
        {
            userId: "xyz789",
            projectId: "def456",
            user: {
                userId: "xyz789",
                email: "user1@test.com",
            },
        }
    ],
},
]

//example output

const users = [
    {
        userId: "xyz789", 
        projectId: ["abc123", "def456"]
    },
    {userId: "sdf012", projectId: ["abc123"]},
]

// for Loop, forEach, map, while
// de-duplication: find, HashMap(js: obj)


let userslist = []; // output, results


function userslistInclude2(userid){
    let included_flag = false;
    userslist.map(userList => {
        if(userList.userId == userid) {
            console.log(userid, " inside map true")
            included_flag = true;
        }
    })

    if (included_flag) {
        return true;
    }
    console.log(userid, " outside map")
    return false;

}

function userslistInclude(userid){
    // let usersListFiltered = userslist.filter(user => {
    //     return user.userId == userid;
    // })
    let usersListFiltered = userslist.filter(user => user.userId == userid)
    if(usersListFiltered.length >= 1){
        return true;
    }
    return false;
}

projects.map(element => {
    
    element.userProjects.map(userProject => {
        
        if (!userslistInclude(userProject.userId)){
            let oneuserobj = {};
            oneuserobj["userId"] = userProject.userId;
            oneuserobj["projectId"]  = [userProject.projectId];
            userslist.push(oneuserobj);
        }else{
            userslist.forEach(oneuser => {
                if (oneuser.userId == userProject.userId){
                    if (!oneuser.projectId.includes(userProject.projectId)){
                        oneuser["projectId"].push(userProject.projectId)
                    }
                }
            })
        }
        
    })   

})


console.log(userslist)

console.log('1'+2+2)
console.log(2+2+"1")