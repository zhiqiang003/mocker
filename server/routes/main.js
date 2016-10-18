// main
get "/" => "main#index"
get "/test" => "main#test"

// error
get "/error" => "error#base"

// common
get "*" => "main#common"
