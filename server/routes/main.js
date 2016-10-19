// main
get "/" => "main#index"
get "/test" => "main#test"

// error
get "/error" => "error#base"

// special
get "/markdown/:md(\w+)" => "markdown#common"

// common
get "*" => "main#common"
