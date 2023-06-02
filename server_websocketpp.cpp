#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>
#include <iostream>

typedef websocketpp::server<websocketpp::config::asio> server;

using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;


std::string processInput(std::string& input) {
    // Process the input and generate the output
    // std::string output = "Processed: " + input;

    std::string converted_letters;
    for (char c : input) {
        if (std::islower(c)) {
            converted_letters += std::toupper(c);
        } else if (std::isupper(c)) {
            converted_letters += std::tolower(c);
        } else {
            converted_letters += c;
        }
    }


    return converted_letters;
}

void on_message(server* s, websocketpp::connection_hdl hdl, server::message_ptr msg) {
    std::string input = msg->get_payload();

    // Process the input and generate the output
    std::string output = processInput(input);

    // Send the output back to the client
    s->send(hdl, output, websocketpp::frame::opcode::text);
}

int main() {
    server websocketServer;


	// Initialize Asio
    websocketServer.init_asio();

    // websocketServer.set_message_handler(&on_message);
	websocketServer.set_message_handler(bind(&on_message, &websocketServer, ::_1, ::_2));
	

    // Listen on port 9002
    websocketServer.listen(9002);
    websocketServer.start_accept();

    // Run the WebSocket server
    websocketServer.run();

    return 0;
}
