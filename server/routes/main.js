// main
get "/" => "main#index"
get "/test" => "main#test"

// error
get "/error" => "error#base"

// action
get "/end/project/list" => "project#list"
get "/end/project/:id(\d+)" => "project#get"
post "/end/project" => "project#create"
put "/end/project" => "project#update"
delete "/end/project/:id(\d+)" => "project#delete"

// special
get "/end/markdown/:md(\w+)" => "markdown#common"

// common
get "*" => "main#common"
