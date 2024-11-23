import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('192.168.3.62', 8080))  # PCのIPアドレスとポート番号を指定
server_socket.listen(1)

print("Waiting for a connection...")
client_socket, client_address = server_socket.accept()
print(f"Connected to {client_address}")
client_socket.close()
# import socket

# # サーバーのIPアドレスとポート番号
# server_ip = '192.168.3.5'
# server_port = 8080

# # ソケットを作成
# client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# try:
#     # サーバーに接続
#     client_socket.connect((server_ip, server_port))
#     print(f'Connected to {server_ip}:{server_port}')

#     # サーバーにデータを送信（例として"Hello, Server!"を送信）
#     message = "Hello, Server!"
#     client_socket.sendall(message.encode())

#     # サーバーからの応答を受信
#     response = client_socket.recv(1024)
#     print(f'Server response: {response.decode()}')

# finally:
#     # ソケットを閉じる
#     client_socket.close()
