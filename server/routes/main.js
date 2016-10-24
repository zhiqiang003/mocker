// main
get "/" => "main#index"

// error
get "/error" => "error#base"

// action
get "/end/project/list" => "project#list"
get "/end/project/:projectId(\d+)" => "project#get"
post "/end/project" => "project#create"
put "/end/project/:projectId(\d+)" => "project#update"
delete "/end/project/:projectId(\d+)" => "project#delete"

get "/end/project/:projectId(\d+)/version/list" => "version#list"
get "/end/project/:projectId(\d+)/version/:versionId(\d+)" => "version#get"
post "/end/project/:projectId(\d+)/version" => "version#create"
put "/end/project/:projectId(\d+)/version/:versionId(\d+)" => "version#update"
delete "/end/project/:projectId(\d+)/version/:versionId(\d+)" => "version#delete"

// special
get "/end/markdown/:md(\w+)" => "markdown#common"

// common
get "/end/*" => "main#backend"
post "/end/*" => "main#backend"
put "/end/*" => "main#backend"
delete "/end/*" => "main#backend"
get "*" => "main#common"
